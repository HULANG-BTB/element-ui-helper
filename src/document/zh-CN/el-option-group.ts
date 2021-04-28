import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: '分组的组名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否将该分组下所有选项置为禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const document: ElDocument = { attributes }

export default document
