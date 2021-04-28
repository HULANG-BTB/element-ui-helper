import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'boolean / string / number', value: '—', default: '—' },
  { name: 'disabled', description: 'whether Switch is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'width', description: 'width of Switch', type: 'number', value: '—', default: '40' },
  { name: 'active-icon-class', description: 'class name of the icon displayed when in `on` state, overrides `active-text`', type: 'string', value: '—', default: '—' },
  { name: 'inactive-icon-class', description: 'class name of the icon displayed when in `off` state, overrides `inactive-text`', type: 'string', value: '—', default: '—' },
  { name: 'active-text', description: 'text displayed when in `on` state', type: 'string', value: '—', default: '—' },
  { name: 'inactive-text', description: 'text displayed when in `off` state', type: 'string', value: '—', default: '—' },
  { name: 'active-value', description: 'switch value when in `on` state', type: 'boolean / string / number', value: '—', default: 'true' },
  { name: 'inactive-value', description: 'switch value when in `off` state', type: 'boolean / string / number', value: '—', default: 'false' },
  { name: 'active-color', description: 'background color when in `on` state', type: 'string', value: '—', default: '#409EFF' },
  { name: 'inactive-color', description: 'background color when in `off` state', type: 'string', value: '—', default: '#C0CCDA' },
  { name: 'name', description: 'input name of Switch', type: 'string', value: '—', default: '—' },
  { name: 'validate-event', description: 'whether to trigger form validation', type: 'boolean', value: '-', default: 'true' }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: 'focus the Switch component', parameter: '—' }]

export const events: DocumentEvent[] = [{ name: 'change', description: 'triggers when value changes', parameter: 'value after changing' }]

export const document: ElDocument = { attributes, methods, events }

export default document
