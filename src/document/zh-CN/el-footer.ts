import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

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
