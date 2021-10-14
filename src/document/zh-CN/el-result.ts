import { DocumentSlot, ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'sub-title',
    description: '二级标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'icon',
    description: '图标类型',
    type: 'string',
    value: 'success / warning / info / error',
    default: 'info'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'icon',
    description: '自定义图标'
  },
  {
    name: 'title',
    description: '自定义标题'
  },
  {
    name: 'subTitle',
    description: '自定义二级标题'
  },
  {
    name: 'extra',
    description: '自定义底部额外区域'
  }
]

export const document: ElDocument = { attributes, slots }

export default document
