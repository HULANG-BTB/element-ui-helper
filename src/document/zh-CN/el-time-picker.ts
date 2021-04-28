import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'date(TimePicker) / string(TimeSelect)',
    value: '—',
    default: '—'
  },
  {
    name: 'readonly',
    description: '完全只读',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'editable',
    description: '文本框可输入',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'clearable',
    description: '是否显示清除按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '非范围选择时的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'start-placeholder',
    description: '范围选择时开始日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'end-placeholder',
    description: '范围选择时开始日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'is-range',
    description: '是否为时间范围选择，仅对`<el-time-picker>`有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'arrow-control',
    description: '是否使用箭头进行时间选择，仅对`<el-time-picker>`有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'align',
    description: '对齐方式',
    type: 'string',
    value: 'left / center / right',
    default: 'left'
  },
  {
    name: 'popper-class',
    description: 'TimePicker 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'picker-options',
    description: '当前时间日期选择器特有的选项参考下表',
    type: 'object',
    value: '—',
    default: '{}'
  },
  {
    name: 'range-separator',
    description: '选择范围时的分隔符',
    type: 'string',
    value: '-',
    default: "'-'"
  },
  {
    name: 'value-format',
    description: '可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象',
    type: 'string',
    value: '见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)',
    default: '—'
  },
  {
    name: 'default-value',
    description: '可选，选择器打开时默认显示的时间',
    type: 'Date(TimePicker) / string(TimeSelect)',
    value: '可被`new Date()`解析(TimePicker) / 可选值(TimeSelect)',
    default: '—'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'prefix-icon',
    description: '自定义头部图标的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-time'
  },
  {
    name: 'clear-icon',
    description: '自定义清空图标的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-circle-close'
  }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: '使 input 获取焦点', parameter: '-' }]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '用户确认选定的值时触发',
    parameter: '组件绑定值'
  },
  {
    name: 'blur',
    description: '当 input 失去焦点时触发',
    parameter: '组件实例'
  },
  {
    name: 'focus',
    description: '当 input 获得焦点时触发',
    parameter: '组件实例'
  }
]

export const document: ElDocument = { attributes, methods, events }

export default document
