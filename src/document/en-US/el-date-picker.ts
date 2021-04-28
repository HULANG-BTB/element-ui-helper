import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'date(DatePicker) / array(DateRangePicker)', value: '—', default: '—' },
  { name: 'readonly', description: 'whether DatePicker is read only', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether DatePicker is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'size', description: 'size of Input', type: 'string', value: 'large/small/mini', default: '—' },
  { name: 'editable', description: 'whether the input is editable', type: 'boolean', value: '—', default: 'true' },
  { name: 'clearable', description: 'whether to show clear button', type: 'boolean', value: '—', default: 'true' },
  { name: 'placeholder', description: 'placeholder in non-range mode', type: 'string', value: '—', default: '—' },
  { name: 'start-placeholder', description: 'placeholder for the start date in range mode', type: 'string', value: '—', default: '—' },
  { name: 'end-placeholder', description: 'placeholder for the end date in range mode', type: 'string', value: '—', default: '—' },
  { name: 'type', description: 'type of the picker', type: 'string', value: 'year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange', default: 'date' },
  { name: 'format', description: 'format of the displayed value in the input box', type: 'string', value: 'see [date formats](#/en-US/component/date-picker#date-formats)', default: 'yyyy-MM-dd' },
  { name: 'align', description: 'alignment', type: 'left/center/right', value: 'left', default: '' },
  { name: 'popper-class', description: "custom class name for DatePicker's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'picker-options', description: 'additional options, check the table below', type: 'object', value: '—', default: '{}' },
  { name: 'range-separator', description: 'range separator', type: 'string', value: '—', default: "'-'" },
  { name: 'default-value', description: 'optional, default date of the calendar', type: 'Date', value: 'anything accepted by `new Date()`', default: '—' },
  {
    name: 'default-time',
    description: 'optional, the time value to use when selecting date range',
    type: 'string[]',
    value: 'Array with length 2, each item is a string like `12:00:00`. The first item for the start date and then second item for the end date',
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
  { name: 'unlink-panels', description: 'unlink two date-panels in range-picker', type: 'boolean', value: '—', default: 'false' },
  { name: 'prefix-icon', description: 'Custom prefix icon class', type: 'string', value: '—', default: 'el-icon-date' },
  { name: 'clear-icon', description: 'Custom clear icon class', type: 'string', value: '—', default: 'el-icon-circle-close' },
  { name: 'validate-event', description: 'whether to trigger form validation', type: 'boolean', value: '-', default: 'true' },
  {
    name: 'Shortcuts',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  { name: 'disabledDate', description: 'a function determining if a date is disabled with that date as its parameter. Should return a Boolean', type: 'function', value: '—', default: '—' },
  { name: 'cellClassName', description: 'set custom className', type: 'Function(Date)', value: '—', default: '—' },
  { name: 'firstDayOfWeek', description: 'first day of week', type: 'Number', value: '1 to 7', default: '7' },
  {
    name: 'onPick',
    description: 'a callback that triggers when the selected date is changed. Only for `daterange` and `datetimerange`.',
    type: 'Function({ maxDate, minDate })',
    value: '-',
    default: '-'
  },
  {
    name: 'Picker Option',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  { name: 'Attribute', description: 'Description', type: 'Type', value: 'Accepted Values', default: 'Default' },
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

export const slots: DocumentSlot[] = [{ name: 'range-separator', description: 'custom range separator content' }]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
