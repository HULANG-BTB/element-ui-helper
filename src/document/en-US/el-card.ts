import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'header', description: 'title of the card. Also accepts a DOM passed by `slot#header`', type: 'string', value: '—', default: '—' },
  { name: 'body-style', description: 'CSS style of body', type: 'object', value: '—', default: "{ padding: '20px' }" },
  { name: 'shadow', description: 'when to show card shadows', type: 'string', value: 'always / hover / never', default: 'always' }
]

export const document: ElDocument = { attributes }

export default document
