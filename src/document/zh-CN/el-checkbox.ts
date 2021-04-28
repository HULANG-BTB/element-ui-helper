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
    description: '选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'true-label',
    description: '选中时的值',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'false-label',
    description: '没有选中时的值',
    type: 'string / number',
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
    description: 'Checkbox 的尺寸，仅在 border 为真时有效',
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
  },
  {
    name: 'checked',
    description: '当前是否勾选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'indeterminate',
    description: '设置 indeterminate 状态，只负责样式控制',
    type: 'boolean',
    value: '—',
    default: 'false'
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
