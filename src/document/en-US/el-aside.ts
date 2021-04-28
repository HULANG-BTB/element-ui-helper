import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [{ name: 'width', description: 'width of the side section', type: 'string', value: '—', default: '300px' }]

export const document: ElDocument = { attributes }

export default document
