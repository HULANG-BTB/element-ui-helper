import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '唯一标志符',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'title',
    description: '面板标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: '—'
  }
]

export const document: ElDocument = { attributes }

export default document
