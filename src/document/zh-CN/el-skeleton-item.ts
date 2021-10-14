import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'variant',
    description: '当前显示的占位元素的样式',
    type: 'Enum(string)',
    value: 'p / text / h1 / h3 / text / caption / button / image / circle / rect',
    default: 'text'
  }
]

export const document: ElDocument = { attributes }

export default document
