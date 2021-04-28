import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: 'title', type: 'string', value: '—', default: '—' },
  { name: 'type', description: 'Component type', type: 'string', value: 'success/warning/info/error', default: 'info' },
  { name: 'description', description: 'Descriptive text. Can also be passed with the default slot', type: 'string', value: '—', default: '—' },
  { name: 'closable', description: 'If closable or not', type: 'boolean', value: '—', default: 'true' },
  { name: 'center', description: 'Whether to center the text', type: 'boolean', value: '—', default: 'false' },
  { name: 'close-text', description: 'Customized close button text', type: 'string', value: '—', default: '—' },
  { name: 'show-icon', description: 'If a type icon is displayed', type: 'boolean', value: '—', default: 'false' },
  { name: 'effect', description: 'Choose theme', type: 'string', value: 'light/dark', default: 'light' }
]

export const events: DocumentEvent[] = [{ name: 'close', description: 'fires when alert is closed', parameter: '—' }]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'description' },
  { name: 'title', description: 'content of the Alert title' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
