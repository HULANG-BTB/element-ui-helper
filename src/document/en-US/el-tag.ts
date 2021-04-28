import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: 'component type', type: 'string', value: 'success/info/warning/danger', default: '—' },
  { name: 'closable', description: 'whether Tag can be removed', type: 'boolean', value: '—', default: 'false' },
  { name: 'disable-transitions', description: 'whether to disable animations', type: 'boolean', value: '—', default: 'false' },
  { name: 'hit', description: 'whether Tag has a highlighted border', type: 'boolean', value: '—', default: 'false' },
  { name: 'color', description: 'background color of the Tag', type: 'string', value: '—', default: '—' },
  { name: 'size', description: 'tag size', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'effect', description: 'component theme', type: 'string', value: 'dark / light / plain', default: 'light' }
]

export const events: DocumentEvent[] = [
  { name: 'click', description: 'triggers when Tag is clicked', parameter: '—' },
  { name: 'close', description: 'triggers when Tag is removed', parameter: '—' }
]

export const document: ElDocument = { attributes, events }

export default document
