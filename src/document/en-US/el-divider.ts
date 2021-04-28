import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'direction', description: "Set divider's direction", type: 'string', value: 'horizontal / vertical', default: 'horizontal' },
  { name: 'content-position', description: 'customize the content on the divider line', type: 'String', value: 'left / right / center', default: 'center' }
]

export const document: ElDocument = { attributes }

export default document
