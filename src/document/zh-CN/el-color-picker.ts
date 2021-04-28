import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'string',
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
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'show-alpha',
    description: '是否支持透明度选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'color-format',
    description: '写入 v-model 的颜色的格式',
    type: 'string',
    value: 'hsl / hsv / hex / rgb',
    default: 'hex（show-alpha 为 false）/ rgb（show-alpha 为 true）'
  },
  {
    name: 'popper-class',
    description: 'ColorPicker 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'predefine',
    description: '预定义颜色',
    type: 'array',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: '当绑定值变化时触发', parameter: '当前值' },
  {
    name: 'active-change',
    description: '面板中当前显示的颜色发生改变时触发',
    parameter: '当前显示的颜色值'
  }
]

export const document: ElDocument = { attributes, events }

export default document
