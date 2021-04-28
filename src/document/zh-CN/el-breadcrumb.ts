import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'separator',
    description: '分隔符',
    type: 'string',
    value: '—',
    default: "斜杠'/'"
  },
  {
    name: 'separator-class',
    description: '图标分隔符 class',
    type: 'string',
    value: '—',
    default: '-'
  }
]

export const document: ElDocument = { attributes }

export default document
