import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'name', description: 'unique identification of the panel', type: 'string/number', value: '—', default: '—' },
  { name: 'title', description: 'title of the panel', type: 'string', value: '—', default: '—' },
  { name: 'disabled', description: 'disable the collapse item', type: 'boolean', value: '—', default: '—' }
]

export const document: ElDocument = { attributes }

export default document
