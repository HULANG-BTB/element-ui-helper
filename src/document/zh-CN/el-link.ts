import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'primary / success / warning / danger / info',
    default: 'default'
  },
  {
    name: 'underline',
    description: '是否下划线',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'href',
    description: '原生 href 属性',
    type: 'string',
    value: '—',
    default: '-'
  },
  {
    name: 'icon',
    description: '图标类名',
    type: 'string',
    value: '—',
    default: '-'
  }
]

export const document: ElDocument = { attributes }

export default document
