import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'description',
    description: '描述性文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'icon',
    description: '图标',
    type: '传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入',
    value: 'string',
    default: '—'
  },
  {
    name: 'status',
    description: '设置当前步骤的状态，不设置则根据 steps 确定状态',
    type: 'wait / process / finish / error / success',
    value: '-',
    default: ''
  }
]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: '自定义图标' },
  { name: 'title', description: '自定义标题' },
  { name: 'description', description: '自定义描述性文字' }
]

export const document: ElDocument = { attributes, slots }

export default document
