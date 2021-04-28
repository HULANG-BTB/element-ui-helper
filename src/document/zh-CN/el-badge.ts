import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value',
    description: '显示值',
    type: 'string, number',
    value: '—',
    default: '—'
  },
  {
    name: 'max',
    description: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'is-dot',
    description: '小圆点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'hidden',
    description: '隐藏 badge',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'primary / success / warning / danger / info',
    default: '—'
  }
]

export const document: ElDocument = { attributes }

export default document
