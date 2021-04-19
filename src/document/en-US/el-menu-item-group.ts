import { DocumentAttribute } from 'typings/attribute'
import { ElDocument } from 'typings/document'

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
