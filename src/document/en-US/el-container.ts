import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

export const attributes: DocumentAttribute[] = [
  {
    name: 'direction',
    description: 'layout direction for child elements',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'vertical when nested with `el-header` or `el-footer`; horizontal otherwise'
  }
]

export const document: ElDocument = { attributes }

export default document
