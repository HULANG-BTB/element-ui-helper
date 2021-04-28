import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'string / number / boolean', value: '—', default: '—' },
  { name: 'label', description: 'value of the Checkbox when used inside a `checkbox-group`', type: 'string / number / boolean', value: '—', default: '—' },
  { name: 'true-label', description: "value of the Checkbox if it's checked", type: 'string / number', value: '—', default: '—' },
  { name: 'false-label', description: "value of the Checkbox if it's not checked", type: 'string / number', value: '—', default: '—' },
  { name: 'disabled', description: 'whether the Checkbox is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'border', description: 'whether to add a border around Checkbox', type: 'boolean', value: '—', default: 'false' },
  { name: 'size', description: 'size of the Checkbox, only works when `border` is true', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'name', description: "native 'name' attribute", type: 'string', value: '—', default: '—' },
  { name: 'checked', description: 'if the Checkbox is checked', type: 'boolean', value: '—', default: 'false' },
  { name: 'indeterminate', description: 'same as `indeterminate` in native checkbox', type: 'boolean', value: '—', default: 'false' }
]

export const events: DocumentEvent[] = [{ name: 'change', description: 'triggers when the binding value changes', parameter: 'the updated value' }]

export const document: ElDocument = { attributes, events }

export default document
