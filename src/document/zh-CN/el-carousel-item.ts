import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'name',
    description: '幻灯片的名字，可用作 `setActiveItem` 的参数',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '该幻灯片所对应指示器的文本',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const document: ElDocument = { attributes }

export default document
