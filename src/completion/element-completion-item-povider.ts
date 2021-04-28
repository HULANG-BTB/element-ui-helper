import { TagObject } from '@/hover-tips'
import { CompletionItemProvider, TextDocument, Position, CancellationToken, ProviderResult, Range, CompletionItem, CompletionContext, CompletionList, CompletionItemKind, workspace } from 'vscode'

import CnDocument from '../document/zh-CN'
import EnDocument from '../document/en-US'
import { ExtensionConfigutation, ExtensionLanguage } from '..'
import { DocumentAttribute } from '@/document'

export class ElementCompletionItemProvider implements CompletionItemProvider<CompletionItem> {
  private _document!: TextDocument
  private _position!: Position
  private token!: CancellationToken
  private tagReg: RegExp = /<([\w-]+)\s*/g
  private attrReg: RegExp = /(?:\(|\s*)([\w-]+)=['"][^'"]*/
  private tagStartReg: RegExp = /<([\w-]*)$/
  private pugTagStartReg: RegExp = /^\s*[\w-]*$/
  private size!: number
  private quotes!: string

  /**
   * 获取前置标签
   */
  getPreTag(): TagObject | undefined {
    let line = this._position.line
    let tag: TagObject | string
    let txt = this.getTextBeforePosition(this._position)

    while (this._position.line - line < 10 && line >= 0) {
      if (line !== this._position.line) {
        txt = this._document.lineAt(line).text
      }
      tag = this.matchTag(this.tagReg, txt, line)

      if (tag !== 'break') {
        return <TagObject>tag
      }
      line--
    }
    return undefined
  }

  /**
   * 获取前置属性
   */
  getPreAttr(): string {
    let txt = this.getTextBeforePosition(this._position).replace(/"[^'"]*(\s*)[^'"]*$/, '')
    let end = this._position.character
    let start = txt.lastIndexOf(' ', end) + 1
    let parsedTxt = this._document.getText(new Range(this._position.line, start, this._position.line, end))

    return this.matchAttr(this.attrReg, parsedTxt)
  }

  /**
   * 匹配属性
   *
   * @param reg 匹配模式
   * @param txt 匹配文本
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
   * 匹配标签
   * @param reg 匹配模式
   * @param txt 匹配文本
   * @param line 当前行
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
    return arr.pop() || 'break'
  }

  /**
   * 获取当前位置之前的字符串
   *
   * @param position 位置
   */
  getTextBeforePosition(position: Position): string {
    var start = new Position(position.line, 0)
    var range = new Range(start, position)
    return this._document.getText(range)
  }

  /**
   * 是否位属性值的开始
   * @param tag 标签
   * @param attr 属性
   */
  isAttrValueStart(tag: Object | undefined, attr: string) {
    return !!tag && !!attr
  }

  /**
   * 是否位属性的开始
   * @param tag 标签
   */
  isAttrStart(tag: TagObject | undefined) {
    const preText = this.getTextBeforePosition(this._position)
    return tag && /[\ :@][\w-]$/.test(preText)
  }

  /**
   * 获取属性值
   *
   * @param tag 标签
   * @param attr 属性
   */
  getAttrValues(tag: string, attr: string): string[] {
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    let document: Record<string, any>
    if (language === ExtensionLanguage.en) {
      document = EnDocument
    } else {
      document = CnDocument
    }
    const attributes: DocumentAttribute[] = document[tag].attributes || []
    const attribute: DocumentAttribute | undefined = attributes.find((attribute) => attribute.name === attr)
    if (!attribute) {
      return []
    }
    const values = attribute.value.split(/[,\/\\]/).map((item) => item.trim())
    return values
  }

  /**
   * 获取属性值的提示信息
   *
   * @param tag 标签
   * @param attr 属性
   */
  getAttrValueCompletionItems(tag: string, attr: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const values = this.getAttrValues(tag, attr)
    values.forEach((value) => {
      completionItems.push({ label: `${value}  ${tag}-${attr}`, kind: CompletionItemKind.Value, insertText: value })
    })
    return completionItems
  }

  /**
   * 获取属性的提示信息
   *
   * @param tag 标签
   */
  getAttrCompletionItems(tag: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    let document: Record<string, any>
    const preText = this.getTextBeforePosition(this._position)
    const prefix = preText.replace(/.*[\s@:]/g, '')
    if (language === ExtensionLanguage.en) {
      document = EnDocument
    } else {
      document = CnDocument
    }
    const attributes: DocumentAttribute[] = document[tag].attributes || []
    const likeTag = attributes.filter((attribute: DocumentAttribute) => attribute.name.includes(prefix))
    likeTag.forEach((attribute: DocumentAttribute) => {
      completionItems.push({ label: `${attribute.name}  ${tag}`, kind: CompletionItemKind.Value, insertText: attribute.name })
    })
    return completionItems
  }

  /**
   * 是否位标签的开始
   */
  isTagStart(): boolean {
    let txt = this.getTextBeforePosition(this._position)
    return this.tagStartReg.test(txt)
  }

  /**
   * 获取标签提示
   */
  getTagCompletionItems(tag: string): CompletionItem[] {
    let completionItems: CompletionItem[] = []
    const config = workspace.getConfiguration().get<ExtensionConfigutation>('element-ui-helper')
    const language = config?.language || ExtensionLanguage.cn
    let document: Record<string, any>
    if (language === ExtensionLanguage.en) {
      document = EnDocument
    } else {
      document = CnDocument
    }
    Object.keys(document).forEach((key) => {
      if (key.includes(tag)) {
        const insertValue = key.replace('el-', '')
        completionItems.push({ label: `${key}  ElementUI`, kind: CompletionItemKind.Value, insertText: `${insertValue}></${key}>` })
      }
    })
    return completionItems
  }

  /**
   * 提供自动完成提示
   *
   * @param document 文档
   * @param position 位置
   * @param token token
   * @param context 上下文
   */
  provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    this._document = document
    this._position = position
    this.token = token

    let tag: TagObject | undefined = this.getPreTag()
    let attr = this.getPreAttr()

    if (!/^[E|e]l/.test(tag?.text || '')) {
      // 如果不是element的标签(E|el开头) 则返回 null 表示没有hover
      return null
    }

    // 如果是属性值的开始
    if (tag && this.isAttrValueStart(tag, attr)) {
      return this.getAttrValueCompletionItems(tag.text, attr)
    } else if (tag && this.isAttrStart(tag)) {
      return this.getAttrCompletionItems(tag.text)
    } else if (tag && this.isTagStart()) {
      return this.getTagCompletionItems(tag.text)
    }

    return null
  }
}
