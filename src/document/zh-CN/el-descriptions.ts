import { DocumentSlot, ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'border',
    description: '是否带有边框',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'column',
    description: '一行 Descriptions Item 的数量',
    type: 'number',
    value: '—',
    default: 3
  },
  {
    name: 'direction',
    description: '排列的方向',
    type: 'string',
    value: 'vertical / horizontal',
    default: 'horizontal'
  },
  {
    name: 'size',
    description: '列表的尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'title',
    description: '标题文本，显示在左上方',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'extra',
    description: '操作区文本，显示在右上方',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'colon',
    description: '是否显示冒号',
    type: 'boolean',
    value: '—',
    default: true
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

export const slots: DocumentSlot[] = [
  { name: 'title', description: '自定义标题，显示在左上方' },
  { name: 'extra', description: '自定义操作区，显示在右上方' }
]

export const document: ElDocument = { attributes, slots }

export default document
