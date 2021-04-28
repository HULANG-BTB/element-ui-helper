import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'reverse',
    description: '指定节点排序方向，默认为正序',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const document: ElDocument = { attributes }

export default document
