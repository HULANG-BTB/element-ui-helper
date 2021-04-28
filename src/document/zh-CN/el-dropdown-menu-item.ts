import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'command',
    description: '指令',
    type: 'string/number/object',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'divided',
    description: '显示分割线',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'icon',
    description: '图标类名',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const document: ElDocument = { attributes }

export default document
