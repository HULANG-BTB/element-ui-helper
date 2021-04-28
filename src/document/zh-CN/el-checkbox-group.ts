import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效',
    type: 'string',
    value: 'medium / small / mini',
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
    name: 'min',
    description: '可被勾选的 checkbox 的最小数量',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'max',
    description: '可被勾选的 checkbox 的最大数量',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'text-color',
    description: '按钮形式的 Checkbox 激活时的文本颜色',
    type: 'string',
    value: '—',
    default: '#ffffff'
  },
  {
    name: 'fill',
    description: '按钮形式的 Checkbox 激活时的填充色和边框色',
    type: 'string',
    value: '—',
    default: '#409EFF'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当绑定值变化时触发的事件',
    parameter: '更新后的值'
  }
]

export const document: ElDocument = { attributes, events }

export default document
