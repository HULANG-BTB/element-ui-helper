import { HoverProvider, TextDocument, Position, CancellationToken, ProviderResult, Hover, workspace, MarkdownString, Range } from 'vscode'
import CnDocument from '../document/zh-CN'
import EnDocument from '../document/en-US'

import { generator, toKebabCase } from '../utils'
import { ExtensionConfigutation, ExtensionLanguage } from '../'
import { TagObject } from '.'

export class ElementHoverProvier implements HoverProvider {
  private _position!: Position
  private _document!: TextDocument
  private _token!: CancellationToken
  private tagReg: RegExp = /<([\w-]+)\s*/g
  private attrReg: RegExp = /(?:\(|\s*)([\w-]+)=?/
  private instance: Record<string, null | undefined | Hover> = {}

  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    this._document = document
    this._position = position
    this._token = token

    // console.log(position.line, position.character)

    const tag: TagObject | undefined = this.getTag()

    if (!/^[E|e]l/.test(tag?.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null
    }

    let attr = this.getAttr()

    const range = this.getHoverRange(attr)

    return this.getHoverInstance(tag, attr, range)
  }

  /**
   * 获取标签
   */
  getTag(): TagObject | undefined {
    let line = this._position.line
    let tag: TagObject | string
    let txt = this.getTextAfterPosition(this._position)

    // 向前搜索 最多十行 搜索标签
    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text
      }
      tag = this.matchTag(this.tagReg, txt, line)
      if (tag === 'break') {
        return undefined
      }
      if (tag) {
        return <TagObject>tag
      }
      line--
    }
    return undefined
  }

  /**
   * 获取属性
   */
  getAttr(): string {
    const txt = this.getTextAfterPosition(this._position)
    let end = txt.length
    let start = txt.lastIndexOf(' ', this._position.character) + 1
    let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end))
    return this.matchAttr(this.attrReg, parsedTxt)
  }

  /**
   * 获取高亮范围
   * @param attr 属性名称
   */
  getHoverRange(attr: string): Range {
    const line = this._document.lineAt(this._position.line).text
    console.log(this._position.line, line, attr)
    const start = line.indexOf(attr)
    const end = start + attr.length
    const range = new Range(this._position.line, start, this._position.line, end)
    return range
  }

  /**
   * 匹配标签
   * @param reg 匹配模式串
   * @param txt 待匹配字符
   * @param line 匹配行
   */
  matchTag(reg: RegExp, txt: string, line: number): TagObject | string {
    let match: RegExpExecArray | null
    let arr: TagObject[] = []

    if (/<\/?[-\w]+[^<>]*>[\s\w]*<?\s*[\w-]*$/.test(txt) || (this._position.line === line && (/^\s*[^<]+\s*>[^<\/>]*$/.test(txt) || /[^<>]*<$/.test(txt[txt.length - 1])))) {
      return 'break'
    }
    while ((match = reg.exec(txt))) {
      arr.push({
        text: match[1],
        offset: this._document.offsetAt(new Position(line, match.index))
      })
    }
    return arr.pop() || ''
  }

  /**
   * 匹配标签
   *
   * @param reg 匹配模式
   * @param txt 待匹配字符
   */
  matchAttr(reg: RegExp, txt: string): string {
    let match: RegExpExecArray | null
    match = reg.exec(txt)
    if (!/"[^"]*"/.test(txt) && match) {
      return match[1]
    }
    return ''
  }

  /**
   * 获取前置内容
   * @param position 位置信息
   */
  getTextBeforePosition(position: Position): string {
    const wordRange = this._document.getWordRangeAtPosition(position)
    const start = new Position(position.line, 0)
    const end = wordRange?.end || position
    const range = new Range(start, end)
    return this._document.getText(range)
  }

  getTextAfterPosition(position: Position): string {
    const wordRange = this._document.getWordRangeAtPosition(position)
    const start = new Position(position.line, 0)
    let endIndex = (wordRange?.end || position).character
    const text = this._document.lineAt(position).text
    while (endIndex < text.length && /[\w-]/.test(text.charAt(endIndex))) {
      endIndex++
    }
    const end = new Position(position.line, endIndex)
    const range = new Range(start, end)
    return this._document.getText(range)
  }

  /**
   *
   * @param tag
   * @param attr
   * @param range
   */
  getHoverInstance(tag: TagObject | undefined, attr: string, range: Range) {
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn

    let key = ''
    const kebabCaseTag = toKebabCase(tag?.text)
    const kebabCaseAttr = toKebabCase(attr)

    if (kebabCaseTag.includes(kebabCaseAttr)) {
      // 当前是一个标签
      key = `${language}-${kebabCaseTag}`
    } else {
      // 当前是一个属性
      key = `${language}-${kebabCaseTag}-${kebabCaseAttr}`
    }

    return this.createHoverInstance(language, kebabCaseTag, kebabCaseAttr, range)
  }

  createHoverInstance(language: ExtensionLanguage, tag: string, attr: string, range: Range): null | Hover {
    let document: Record<string, any>
    if (language === ExtensionLanguage.en) {
      document = EnDocument
    } else {
      document = CnDocument
    }
    if (tag === attr) {
      attr = ''
    }
    if (Object.prototype.hasOwnProperty.call(document, tag)) {
      const tagDocument = document[tag]
      const hoverMarkdownStrings: MarkdownString[] = []
      Object.keys(tagDocument).forEach((key: string) => {
        const hoverMarkdownString: MarkdownString = generator[key]?.(tagDocument, tag, attr, language)
        if (hoverMarkdownString) {
          hoverMarkdownStrings.push(hoverMarkdownString)
        }
      })
      return new Hover(hoverMarkdownStrings, range)
    } else {
      return null
    }
  }
}
