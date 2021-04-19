import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

export const attributes: DocumentAttribute[] = [
  { name: 'separator', description: 'separator character', type: 'string', value: '—', default: '/' },
  { name: 'separator-class', description: 'class name of icon separator', type: 'string', value: '—', default: '-' }
]

export const document: ElDocument = { attributes }

export default document
