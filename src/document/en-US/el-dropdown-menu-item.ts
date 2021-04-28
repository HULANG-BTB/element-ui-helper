import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'command', description: "a command to be dispatched to Dropdown's `command` callback", type: 'string/number/object', value: '—', default: '—' },
  { name: 'disabled', description: 'whether the item is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'divided', description: 'whether a divider is displayed', type: 'boolean', value: '—', default: 'false' },
  { name: 'icon', description: 'icon class name', type: 'string', value: '—', default: '—' }
]

export const document: ElDocument = { attributes }

export default document
