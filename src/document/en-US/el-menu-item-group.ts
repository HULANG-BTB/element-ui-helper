import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: 'group title',
    type: 'string',
    value: '—',
    default: '—'
  }
]
export const document: ElDocument = { attributes }

export default document
