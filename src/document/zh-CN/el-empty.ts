import { DocumentSlot, ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'image',
    description: '图片地址',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'image-size',
    description: '图片大小（宽度）',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'description',
    description: '文本描述',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'default', description: '自定义底部内容' },
  { name: 'image', description: '自定义图片' },
  { name: 'description', description: '自定义描述文字' }
]

export const document: ElDocument = { attributes, slots }

export default document
