import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'label', description: 'value of the checkbox when used inside a `checkbox-group`', type: 'string / number / boolean', value: '—', default: '—' },
  { name: 'true-label', description: "value of the checkbox if it's checked", type: 'string / number', value: '—', default: '—' },
  { name: 'false-label', description: "value of the checkbox if it's not checked", type: 'string / number', value: '—', default: '—' },
  { name: 'disabled', description: 'whether the checkbox is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'name', description: "native 'name' attribute", type: 'string', value: '—', default: '—' },
  { name: 'checked', description: 'if the checkbox is checked', type: 'boolean', value: '—', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
