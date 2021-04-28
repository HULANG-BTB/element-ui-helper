import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'boolean / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'width',
    description: 'switch 的宽度（像素）',
    type: 'number',
    value: '—',
    default: '40'
  },
  {
    name: 'active-icon-class',
    description: 'switch 打开时所显示图标的类名，设置此项会忽略 `active-text`',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'inactive-icon-class',
    description: 'switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text`',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'active-text',
    description: 'switch 打开时的文字描述',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'inactive-text',
    description: 'switch 关闭时的文字描述',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'active-value',
    description: 'switch 打开时的值',
    type: 'boolean / string / number',
    value: '—',
    default: 'true'
  },
  {
    name: 'inactive-value',
    description: 'switch 关闭时的值',
    type: 'boolean / string / number',
    value: '—',
    default: 'false'
  },
  {
    name: 'active-color',
    description: 'switch 打开时的背景色',
    type: 'string',
    value: '—',
    default: '#409EFF'
  },
  {
    name: 'inactive-color',
    description: 'switch 关闭时的背景色',
    type: 'string',
    value: '—',
    default: '#C0CCDA'
  },
  {
    name: 'name',
    description: 'switch 对应的 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'validate-event',
    description: '改变 switch 状态时是否触发表单的校验',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: '使 Switch 获取焦点', parameter: '-' }]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: 'switch 状态发生变化时的回调函数',
    parameter: '新状态的值'
  }
]

export const document: ElDocument = { attributes, methods, events }

export default document
