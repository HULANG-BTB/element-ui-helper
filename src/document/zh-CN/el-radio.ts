import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: 'Radio 的 value',
    type: 'string / number / boolean',
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
    name: 'border',
    description: '是否显示边框',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Radio 的尺寸，仅在 border 为真时有效',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '绑定值变化时触发的事件',
    parameter: '选中的 Radio label 值'
  }
]

export const document: ElDocument = { attributes, events }

export default document
