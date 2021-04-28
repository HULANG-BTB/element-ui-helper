import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'span', description: 'number of column the grid spans', type: 'number', value: '—', default: '24' },
  { name: 'offset', description: 'number of spacing on the left side of the grid', type: 'number', value: '—', default: '0' },
  { name: 'push', description: 'number of columns that grid moves to the right', type: 'number', value: '—', default: '0' },
  { name: 'pull', description: 'number of columns that grid moves to the left', type: 'number', value: '—', default: '0' },
  { name: 'xs', description: '`<768px` Responsive columns or column props object', type: 'number/object (e.g. {span: 4, offset: 4})', value: '—', default: '—' },
  { name: 'sm', description: '`≥768px` Responsive columns or column props object', type: 'number/object (e.g. {span: 4, offset: 4})', value: '—', default: '—' },
  { name: 'md', description: '`≥992px` Responsive columns or column props object', type: 'number/object (e.g. {span: 4, offset: 4})', value: '—', default: '—' },
  { name: 'lg', description: '`≥1200px` Responsive columns or column props object', type: 'number/object (e.g. {span: 4, offset: 4})', value: '—', default: '—' },
  { name: 'xl', description: '`≥1920px` Responsive columns or column props object', type: 'number/object (e.g. {span: 4, offset: 4})', value: '—', default: '—' },
  { name: 'tag', description: 'custom element tag', type: 'string', value: '*', default: 'div' }
]

export const document: ElDocument = { attributes }

export default document
