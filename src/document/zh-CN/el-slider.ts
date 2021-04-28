import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'min',
    description: '最小值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'max',
    description: '最大值',
    type: 'number',
    value: '—',
    default: '100'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'step',
    description: '步长',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'show-input',
    description: '是否显示输入框，仅在非范围选择时有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-input-controls',
    description: '在显示输入框的情况下，是否显示输入框的控制按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'input-size',
    description: '输入框的尺寸',
    type: 'string',
    value: 'large / medium / small / mini',
    default: 'small'
  },
  {
    name: 'show-stops',
    description: '是否显示间断点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-tooltip',
    description: '是否显示 tooltip',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'format-tooltip',
    description: '格式化 tooltip message',
    type: 'function(value)',
    value: '—',
    default: '—'
  },
  {
    name: 'range',
    description: '是否为范围选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'vertical',
    description: '是否竖向模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'height',
    description: 'Slider 高度，竖向模式时必填',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '屏幕阅读器标签',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'debounce',
    description: '输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'tooltip-class',
    description: 'tooltip 的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'marks',
    description: '标记， key 的类型必须为 number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式',
    type: 'object',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）',
    parameter: '改变后的值'
  },
  {
    name: 'input',
    description: '数据改变时触发（使用鼠标拖曳时，活动过程实时触发）',
    parameter: '改变后的值'
  }
]

export const document: ElDocument = { attributes, events }

export default document
