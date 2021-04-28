import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'separator', description: 'separator character', type: 'string', value: '—', default: '/' },
  { name: 'separator-class', description: 'class name of icon separator', type: 'string', value: '—', default: '-' }
]

export const document: ElDocument = { attributes }

export default document
