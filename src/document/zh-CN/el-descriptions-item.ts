import { DocumentSlot, ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: '标签文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'span',
    description: '列的数量',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'labelClassName',
    description: '自定义标签类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'contentClassName',
    description: '自定义内容类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'labelStyle',
    description: '自定义标签样式',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'contentStyle',
    description: '自定义内容样式',
    type: 'object',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [{ name: 'label', description: '自定义标签文本' }]

export const document: ElDocument = { attributes, slots }

export default document
