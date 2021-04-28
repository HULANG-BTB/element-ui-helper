import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'date(DateTimePicker) / array(DateTimeRangePicker)', value: '—', default: '—' },
  { name: 'readonly', description: 'whether DatePicker is read only', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether DatePicker is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'editable', description: 'whether the input is editable', type: 'boolean', value: '—', default: 'true' },
  { name: 'clearable', description: 'whether to show clear button', type: 'boolean', value: '—', default: 'true' },
  { name: 'size', description: 'size of Input', type: 'string', value: 'large/small/mini', default: '—' },
  { name: 'placeholder', description: 'placeholder in non-range mode', type: 'string', value: '—', default: '—' },
  { name: 'start-placeholder', description: 'placeholder for the start date in range mode', type: 'string', value: '—', default: '—' },
  { name: 'end-placeholder', description: 'placeholder for the end date in range mode', type: 'string', value: '—', default: '—' },
  { name: 'time-arrow-control', description: 'whether to pick time using arrow buttons', type: 'boolean', value: '—', default: 'false' },
  { name: 'type', description: 'type of the picker', type: 'string', value: 'year/month/date/datetime/ week/datetimerange/daterange', default: 'date' },
  {
    name: 'format',
    description: 'format of the displayed value in the input box',
    type: 'string',
    value: 'see [date formats](#/en-US/component/date-picker#date-formats)',
    default: 'yyyy-MM-dd HH:mm:ss'
  },
  { name: 'align', description: 'alignment', type: 'left/center/right', value: 'left', default: '' },
  { name: 'popper-class', description: "custom class name for DateTimePicker's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'picker-options', description: 'additional options, check the table below', type: 'object', value: '—', default: '{}' },
  { name: 'range-separator', description: 'range separator', type: 'string', value: '-', default: "'-'" },
  { name: 'default-value', description: 'optional, default date of the calendar', type: 'Date', value: 'anything accepted by `new Date()`', default: '—' },
  {
    name: 'default-time',
    description: 'the default time value after picking a date',
    type: 'non-range: string / range: string[]',
    value: 'non-range: a string like `12:00:00`, range: array of two strings, and the first item is for the start date and second for the end date. `00:00:00` will be used if not specified',
    default: '—'
  },
  {
    name: 'value-format',
    description: 'optional, format of binding value. If not specified, the binding value will be a Date object',
    type: 'string',
    value: 'see [date formats](#/en-US/component/date-picker#date-formats)',
    default: '—'
  },
  { name: 'name', description: 'same as `name` in native input', type: 'string', value: '—', default: '—' },
  { name: 'unlink-panels', description: 'unllink two date-panels in range-picker', type: 'boolean', value: '—', default: 'false' },
  { name: 'prefix-icon', description: 'Custom prefix icon class', type: 'string', value: '—', default: 'el-icon-date' },
  { name: 'clear-icon', description: 'Custom clear icon class', type: 'string', value: '—', default: 'el-icon-circle-close' },
  {
    name: 'Picker Options',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  { name: 'shortcuts', description: 'a { text, onClick } object array to set shortcut options, check the table below', type: 'object[]', value: '—', default: '—' },
  { name: 'disabledDate', description: 'a function determining if a date is disabled with that date as its parameter. Should return a Boolean', type: 'function', value: '—', default: '—' },
  { name: 'cellClassName', description: 'set custom className', type: 'Function(Date)', value: '—', default: '—' },
  { name: 'firstDayOfWeek', description: 'first day of week', type: 'Number', value: '1 to 7', default: '7' },
  {
    name: 'Shortcuts',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  { name: 'text', description: 'title of the shortcut', type: 'string', value: '—', default: '—' },
  {
    name: 'onClick',
    description:
      "callback function, triggers when the shortcut is clicked, with the `vm` as its parameter. You can change the picker value by emitting the `pick` event. Example: `vm.$emit('pick', new Date())`",
    type: 'function',
    value: '—',
    default: '—'
  }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: 'focus the Input component', parameter: '—' }]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when user confirms the value', parameter: "component's binding value" },
  { name: 'blur', description: 'triggers when Input blurs', parameter: 'component instance' },
  { name: 'focus', description: 'triggers when Input focuses', parameter: 'component instance' }
]

export const document: ElDocument = { attributes, methods, events }

export default document
