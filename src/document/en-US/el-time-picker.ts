import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'date(TimePicker) / string(TimeSelect)', value: '-', default: '-' },
  { name: 'readonly', description: 'whether TimePicker is read only', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether TimePicker is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'editable', description: 'whether the input is editable', type: 'boolean', value: '—', default: 'true' },
  { name: 'clearable', description: 'whether to show clear button', type: 'boolean', value: '—', default: 'true' },
  { name: 'size', description: 'size of Input', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'placeholder', description: 'placeholder in non-range mode', type: 'string', value: '—', default: '—' },
  { name: 'start-placeholder', description: 'placeholder for the start time in range mode', type: 'string', value: '—', default: '—' },
  { name: 'end-placeholder', description: 'placeholder for the end time in range mode', type: 'string', value: '—', default: '—' },
  { name: 'is-range', description: 'whether to pick a time range, only works with `<el-time-picker>`', type: 'boolean', value: '—', default: 'false' },
  { name: 'arrow-control', description: 'whether to pick time using arrow buttons, only works with `<el-time-picker>`', type: 'boolean', value: '—', default: 'false' },
  { name: 'align', description: 'alignment', type: 'left / center / right', value: 'left', default: '' },
  { name: 'popper-class', description: "custom class name for TimePicker's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'picker-options', description: 'additional options, check the table below', type: 'object', value: '—', default: '{}' },
  { name: 'range-separator', description: 'range separator', type: 'string', value: '-', default: "'-'" },
  {
    name: 'default-value',
    description: 'optional, default date of the calendar',
    type: 'Date for TimePicker, string for TimeSelect',
    value: 'anything accepted by `new Date()` for TimePicker, selectable value for TimeSelect',
    default: '—'
  },
  {
    name: 'value-format',
    description: 'optional, only for TimePicker, format of binding value. If not specified, the binding value will be a Date object',
    type: 'string',
    value: 'see [date formats](#/en-US/component/date-picker#date-formats)',
    default: '—'
  },
  { name: 'name', description: 'same as `name` in native input', type: 'string', value: '—', default: '—' },
  { name: 'prefix-icon', description: 'Custom prefix icon class', type: 'string', value: '—', default: 'el-icon-time' },
  { name: 'clear-icon', description: 'Custom clear icon class', type: 'string', value: '—', default: 'el-icon-circle-close' }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: 'focus the Input component', parameter: '-' }]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when user confirms the value', parameter: "component's binding value" },
  { name: 'blur', description: 'triggers when Input blurs', parameter: 'component instance' },
  { name: 'focus', description: 'triggers when Input focuses', parameter: 'component instance' }
]

export const document: ElDocument = { attributes, methods, events }

export default document
