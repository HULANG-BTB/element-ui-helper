import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: 'name of the item, can be used in `setActiveItem`', type: 'string', value: '—', default: '—' },
  { name: 'label', description: 'text content for the corresponding indicator', type: 'string', value: '—', default: '—' }
]

export const document: ElDocument = { attributes }

export default document
