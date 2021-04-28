import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'direction',
    description: '子元素的排列方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: '子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal'
  }
]

export const document: ElDocument = { attributes }

export default document
