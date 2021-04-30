import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentScopedSlot } from '@/document'
import { DocumentSlot } from '@/document'
import { MarkdownString } from 'vscode'

/**
 * 文档提示生成 工具
 */
export const generator = {
  attributes: (document: ElDocument, tag: string, attribute: string, language: string): MarkdownString => {
    let isUndefined: boolean = true // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true)
    const attributes = document.attributes || []
    if (attributes.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 属性 \r`)
        markdownString.appendMarkdown('| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r')
      } else {
        markdownString.appendMarkdown(`### ${tag} Attributes \r`)
        markdownString.appendMarkdown('| Attributes | Description | Type | Accepted Values | Default |\r')
      }
      markdownString.appendMarkdown('|---|---|:-:|---|:-:|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      attributes.forEach((row: DocumentAttribute) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find((row: DocumentAttribute) => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  },
  methods: (document: ElDocument, tag: string, attribute: string, language: string): MarkdownString => {
    let isUndefined: boolean = true // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true)
    const methods = document.methods || []
    if (methods.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 方法\r`)
        markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r')
      } else {
        markdownString.appendMarkdown(`### ${tag} Method\r`)
        markdownString.appendMarkdown('| Method | Description | Parameters |\r')
      }
      markdownString.appendMarkdown('|---|---|:-:|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      methods.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find((row: DocumentMethod) => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  },
  events: (document: ElDocument, tag: string, attribute: string, language: string): MarkdownString => {
    let isUndefined: boolean = true // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true)
    const events = document.events || []
    if (events.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 事件\r`)
        markdownString.appendMarkdown('| 方法 | 说明 | 参数 |\r')
      } else {
        markdownString.appendMarkdown(`### ${tag} Event\r`)
        markdownString.appendMarkdown('| Event | Description | Parameters |\r')
      }
      markdownString.appendMarkdown('|---|---|:-:|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      events.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((row: DocumentMethod) => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|${row.parameter}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  },
  slots: (document: ElDocument, tag: string, attribute: string, language: string): MarkdownString => {
    let isUndefined: boolean = true // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true)
    const slots = document.slots || []
    if (slots.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 插槽\r`)
        markdownString.appendMarkdown('| 插槽 | 说明 |\r')
      } else {
        markdownString.appendMarkdown(`### ${tag} Slot\r`)
        markdownString.appendMarkdown('| Slot | Description |\r')
      }
      markdownString.appendMarkdown('|---|---|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: DocumentSlot) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((row: DocumentSlot) => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  },
  scopedSlots: (document: ElDocument, tag: string, attribute: string, language: string): MarkdownString => {
    let isUndefined: boolean = true // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString('', true)
    const scopedSlots = document.scopedSlots || []
    if (scopedSlots.length) {
      if (language === 'zh-CN') {
        markdownString.appendMarkdown(`### ${tag} 插槽\r`)
        markdownString.appendMarkdown('| 插槽 | 说明 |\r')
      } else {
        markdownString.appendMarkdown(`### ${tag} Slot\r`)
        markdownString.appendMarkdown('| Slot | Description |\r')
      }
      markdownString.appendMarkdown('|---|---|\r')
    }
    if (attribute.length === 0) {
      // 属性 和标签一样 显示全部
      scopedSlots.forEach((row: DocumentScopedSlot) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      })
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = scopedSlots.find((row: DocumentScopedSlot) => row.name === attribute)
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`)
        isUndefined = false
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString('', true)
    }
    return markdownString
  }
}

/**
 * 驼峰转横线
 *
 * @param str 待转换的串
 */
export const toKebabCase = (str: string | undefined) => {
  if (str === undefined) {
    return ''
  }
  var temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 1) === '-') {
    //如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1)
  }
  return temp
}

export default { generator, toKebabCase }
