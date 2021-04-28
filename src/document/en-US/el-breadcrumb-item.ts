import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'to', description: 'target route of the link, same as `to` of `vue-router`', type: 'string/object', value: '—', default: '—' },
  { name: 'replace', description: 'if `true`, the navigation will not leave a history record', type: 'boolean', value: '—', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
