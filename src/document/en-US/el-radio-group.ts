import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: 'binding value',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: 'the size of radio buttons or bordered radios',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'disabled',
    description: 'whether the nesting radios are disabled',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'text-color',
    description: 'font color when button is active',
    type: 'string',
    value: '—',
    default: '#ffffff'
  },
  {
    name: 'fill',
    description: 'border and background color when button is active',
    type: 'string',
    value: '—',
    default: '#409EFF'
  }
]

export const events: DocumentEvent[] = [{ name: 'change', description: 'triggers when the bound value changes', parameter: 'the label value of the chosen radio' }]

export const document: ElDocument = { attributes, events }

export default document
