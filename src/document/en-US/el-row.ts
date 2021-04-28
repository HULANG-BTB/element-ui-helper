import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'gutter', description: 'grid spacing', type: 'number', value: '—', default: '0' },
  { name: 'type', description: 'layout mode, you can use flex, works in modern browsers', type: 'string', value: '—', default: '—' },
  { name: 'justify', description: 'horizontal alignment of flex layout', type: 'string', value: 'start/end/center/space-around/space-between', default: 'start' },
  { name: 'align', description: 'vertical alignment of flex layout', type: 'string', value: 'top/middle/bottom', default: 'top' },
  { name: 'tag', description: 'custom element tag', type: 'string', value: '*', default: 'div' }
]

export const document: ElDocument = { attributes }

export default document
