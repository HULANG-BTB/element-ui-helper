import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: 'Radio 的 value',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const document: ElDocument = { attributes }

export default document
