import { HoverProvider, TextDocument, Position, CancellationToken, ProviderResult, Hover, workspace, DebugConsoleMode, MarkdownString, Range } from 'vscode'
import CnDocument from '../document/zh-CN'
import EnDocument from '../document/en-US'

import { generator } from '../utils'

const getHoverInstance = (language: string, tag: string, attribute: string | null, range: Range): null | Hover => {
  let document: Record<string, any>
  if (language === 'en-US') {
    document = EnDocument
  } else {
    document = CnDocument
  }
  if (Object.prototype.hasOwnProperty.call(document, tag)) {
    const tagDocument = document[tag]
    const hoverMarkdownStrings: MarkdownString[] = []
    Object.keys(tagDocument).forEach((key: string) => {
      const hoverMarkdownString: MarkdownString = generator[key]?.(tagDocument, tag, attribute, language)
      if (hoverMarkdownString) {
        hoverMarkdownStrings.push(hoverMarkdownString)
      }
    })
    return new Hover(hoverMarkdownStrings, range)
  } else {
    return null
  }
}

const hoverCreater = (tag: string, keyword: string, range: Range): ProviderResult<Hover> => {
  if (!tag.includes('el-')) {
    // 如果不是element的标签 则返回 null 表示没有hover
    return null
  }
  const config = workspace.getConfiguration().get('element-ui-helper')
  const { language } = config as any
  const instance: Record<string, Hover | null> = {}
  let key = ''
  if (tag.includes(keyword)) {
    // 当前是一个标签
    key = `${language}-${tag}`
  } else {
    // 当前是一个属性
    key = `${language}-${tag}-${keyword}`
  }
  // 如果不存在实例 则尝试常见实例
  if (instance[key] === undefined) {
    const attribute = tag.includes(keyword) ? null : keyword
    instance[key] = getHoverInstance(language, tag, attribute, range)
  }
  return instance[key]
}

export const hoverProvider: HoverProvider = {
  provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {
    let tag: string = ''
    let keyword: string = ''
    let screenRange: Range = new Range(position, position)
    const text = document.getText(document.getWordRangeAtPosition(position))

    // 对于悬停时 长度小于200的才进行匹配 避免出现整个文件的情况
    if (text.length < 200) {
      // 获取当前目标
      const line = document.lineAt(position.line).text
      // 反标签 不处理
      if (/<\/[a-zA-Z--]*>/.test(line)) {
        return null
      }

      new RegExp(`[\\s|:|<|@]+([a-zA-Z0-9-]*${text}[a-zA-Z0-9-]*)[\\s|=|>]*`).test(line)
      keyword = RegExp.$1

      const keywordStartPosition = new Position(position.line, line.indexOf(keyword))
      const keyWordEndPosition = new Position(position.line, keywordStartPosition.character + keyword.length)

      screenRange = new Range(keywordStartPosition, keyWordEndPosition)

      // 获取最近的标签名称
      for (let i = position.line; i >= 0; --i) {
        const text = document.lineAt(i).text
        if (/^\s*<([a-zA-Z-]+)[\s|>]*/.test(text)) {
          tag = RegExp.$1
          break
        }
      }
    }

    return hoverCreater(tag, keyword, screenRange)
  }
}
