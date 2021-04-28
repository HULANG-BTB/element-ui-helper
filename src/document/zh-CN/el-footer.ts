import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'height',
    description: '底栏高度',
    type: 'string',
    value: '—',
    default: '60px'
  }
]

export const document: ElDocument = { attributes }

export default document
