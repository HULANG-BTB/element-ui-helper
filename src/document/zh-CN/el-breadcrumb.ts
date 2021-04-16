import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

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
