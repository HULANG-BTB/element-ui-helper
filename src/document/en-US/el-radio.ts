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
    name: 'label',
    description: 'the value of Radio',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: 'whether Radio is disabled',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'border',
    description: 'whether to add a border around Radio',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'size',
    description: 'size of the Radio, only works when `border` is true',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'name',
    description: "native 'name' attribute",
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [{ name: 'change', description: 'triggers when the bound value changes', parameter: 'the label value of the chosen radio' }]

export const document: ElDocument = { attributes, events }

export default document
