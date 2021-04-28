import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: 'type', type: 'string', value: 'primary / success / warning / danger / info', default: 'default' },
  { name: 'underline', description: 'whether the component has underline', type: 'boolean', value: '—', default: 'true' },
  { name: 'disabled', description: 'whether the component is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'href', description: "same as native hyperlink's `href`", type: 'string', value: '—', default: '-' },
  { name: 'icon', description: 'class name of icon', type: 'string', value: '—', default: '-' }
]

export const document: ElDocument = { attributes }

export default document
