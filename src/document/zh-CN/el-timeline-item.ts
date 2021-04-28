import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'timestamp',
    description: '时间戳',
    type: 'string',
    value: '-',
    default: '—'
  },
  {
    name: 'hide-timestamp',
    description: '是否隐藏时间戳',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placement',
    description: '时间戳位置',
    type: 'string',
    value: 'top / bottom',
    default: 'bottom'
  },
  {
    name: 'type',
    description: '节点类型',
    type: 'string',
    value: 'primary / success / warning / danger / info',
    default: '-'
  },
  {
    name: 'color',
    description: '节点颜色',
    type: 'string',
    value: 'hsl / hsv / hex / rgb',
    default: '-'
  },
  {
    name: 'size',
    description: '节点尺寸',
    type: 'string',
    value: 'normal / large',
    default: 'normal'
  },
  {
    name: 'icon',
    description: '节点图标',
    type: 'string',
    value: '—',
    default: '-'
  }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Timeline-Item 的内容' },
  { name: 'dot', description: '自定义节点' }
]

export const document: ElDocument = { attributes, slots }

export default document
