import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'date(DateTimePicker) / array(DateTimeRangePicker)',
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
    value: 'large, small, mini',
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
    description: '范围选择时结束日期的占位内容',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'time-arrow-control',
    description: '是否使用箭头进行时间选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'type',
    description: '显示类型',
    type: 'string',
    value: 'year/month/date/week/ datetime/datetimerange/daterange',
    default: 'date'
  },
  {
    name: 'format',
    description: '显示在输入框中的格式',
    type: 'string',
    value: '见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)',
    default: 'yyyy-MM-dd HH:mm:ss'
  },
  {
    name: 'align',
    description: '对齐方式',
    type: 'string',
    value: 'left, center, right',
    default: 'left'
  },
  {
    name: 'popper-class',
    description: 'DateTimePicker 下拉框的类名',
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
    name: 'default-value',
    description: '可选，选择器打开时默认显示的时间',
    type: 'Date',
    value: '可被`new Date()`解析',
    default: '—'
  },
  {
    name: 'default-time',
    description: '选中日期后的默认具体时刻',
    type: '非范围选择时：string / 范围选择时：string[]',
    value: '非范围选择时：形如`12:00:00`的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 `00:00:00`',
    default: '—'
  },
  {
    name: 'value-format',
    description: '可选，绑定值的格式。不指定则绑定值为 Date 对象',
    type: 'string',
    value: '见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)',
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
    name: 'unlink-panels',
    description: '在范围选择器里取消两个日期面板之间的联动',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'prefix-icon',
    description: '自定义头部图标的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-date'
  },
  {
    name: 'clear-icon',
    description: '自定义清空图标的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-circle-close'
  }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: '使 input 获取焦点', parameter: '—' }]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '用户确认选定的值时触发',
    parameter: '组件绑定值。格式与绑定值一致，可受 `value-format` 控制'
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

export const slots: DocumentSlot[] = [{ name: 'range-separator', description: '自定义分隔符' }]

export const pickerOptions: DocumentAttribute[] = [
  {
    name: 'selectableRange',
    description: "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
    type: 'string / array',
    value: '—',
    default: '—'
  },
  {
    name: 'format',
    description: '时间格式化(TimePicker)',
    type: 'string',
    value: '小时：HH，分：mm，秒：ss，AM/PM A',
    default: "'HH:mm:ss'"
  }
]

export const selectOptions: DocumentAttribute[] = [
  {
    name: 'start',
    description: '开始时间',
    type: 'string',
    value: '—',
    default: '09:00'
  },
  {
    name: 'end',
    description: '结束时间',
    type: 'string',
    value: '—',
    default: '18:00'
  },
  {
    name: 'step',
    description: '间隔时间',
    type: 'string',
    value: '—',
    default: '00:30'
  },
  {
    name: 'minTime',
    description: '最小时间，小于该时间的时间段将被禁用',
    type: 'string',
    value: '—',
    default: '00:00'
  },
  {
    name: 'maxTime',
    description: '最大时间，大于该时间的时间段将被禁用',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const document: ElDocument = { attributes, methods, events, slots, pickerOptions, selectOptions }

export default document
