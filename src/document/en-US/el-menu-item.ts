import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'index',
    description: 'unique identification',
    type: 'string/null',
    value: '—',
    default: null
  },
  {
    name: 'route',
    description: 'Vue Router object',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: 'whether disabled',
    type: 'boolean',
    value: '—',
    default: false
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: 'callback function when menu-item is clicked',
    parameter: 'el: menu-item instance'
  }
]

export const document: ElDocument = { events }

export default document
