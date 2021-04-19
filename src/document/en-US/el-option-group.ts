import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: 'name of the group', type: 'string', value: '—', default: '—' },
  { name: 'disabled', description: 'whether to disable all options in this group', type: 'boolean', value: '—', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
