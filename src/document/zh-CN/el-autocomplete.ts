import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'value-key',
    description: '输入建议对象中用于显示的键名',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'value',
    description: '必填值，输入绑定值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'debounce',
    description: '获取输入建议的去抖延时',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'placement',
    description: '菜单弹出位置',
    type: 'string',
    value: 'top / top-start / top-end / bottom / bottom-start / bottom-end',
    default: 'bottom-start'
  },
  {
    name: 'fetch-suggestions',
    description: '返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它',
    type: 'Function(queryString, callback)',
    value: '—',
    default: '—'
  },
  {
    name: 'popper-class',
    description: 'Autocomplete 下拉列表的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'trigger-on-focus',
    description: '是否在输入框 focus 时显示建议列表',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'select-when-unmatched',
    description: '在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'label',
    description: '输入框关联的label文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'prefix-icon',
    description: '输入框头部图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'suffix-icon',
    description: '输入框尾部图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'hide-loading',
    description: '是否隐藏远程加载时的加载图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popper-append-to-body',
    description: '是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'highlight-first-item',
    description: '是否默认突出显示远程搜索建议中的第一项',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: '使 input 获取焦点', parameter: '-' }]

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '点击选中建议项时触发',
    parameter: '选中建议项'
  },
  {
    name: 'change',
    description: '在 Input 值改变时触发',
    parameter: '(value: string \\'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: '输入框头部内容' },
  { name: 'suffix', description: '输入框尾部内容' },
  { name: 'prepend', description: '输入框前置内容' },
  { name: 'append', description: '输入框后置内容' }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: '—', description: '自定义输入建议，参数为 { item }' }]

export const document: ElDocument = {
  attributes,
  methods,
  events,
  slots,
  scopedSlots
}

export default document
