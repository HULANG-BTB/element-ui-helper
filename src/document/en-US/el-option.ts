import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value', description: 'value of option', type: 'string/number/object', value: '—', default: '—' },
  { name: 'label', description: 'label of option, same as `value` if omitted', type: 'string/number', value: '—', default: '—' },
  { name: 'disabled', description: 'whether option is disabled', type: 'boolean', value: '—', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
