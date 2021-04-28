import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value', description: 'display value', type: 'string, number', value: '—', default: '—' },
  { name: 'max', description: "maximum value, shows '{max}+' when exceeded. Only works if `value` is a `Number`", type: 'number', value: '—', default: '—' },
  { name: 'is-dot', description: 'if a little dot is displayed', type: 'boolean', value: '—', default: 'false' },
  { name: 'hidden', description: 'hidden badge', type: 'boolean', value: '—', default: 'false' },
  { name: 'type', description: 'button type', type: 'string', value: 'primary / success / warning / danger / info', default: '—' }
]

export const document: ElDocument = { attributes }

export default document
