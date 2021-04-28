import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: 'title of the tab', type: 'string', value: '—', default: '—' },
  { name: 'disabled', description: 'whether Tab is disabled', type: 'boolean', value: '—', default: 'false' },
  {
    name: 'name',
    description: 'identifier corresponding to the name of Tabs, representing the alias of the tab-pane',
    type: 'string',
    value: '—',
    default: "ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is '1'"
  },
  { name: 'closable', description: 'whether Tab is closable', type: 'boolean', value: '—', default: 'false' },
  { name: 'lazy', description: 'whether Tab is lazily rendered', type: 'boolean', value: '—', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
