import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'

const attributes: DocumentAttribute[] = [
  {
    name: 'index',
    description: '唯一标志',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'route',
    description: 'Vue Router 路径对象',
    type: 'Object',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: false
  }
]

export const document: ElDocument = { attributes }

export default document
