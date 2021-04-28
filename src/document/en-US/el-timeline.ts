import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [{ name: 'reverse', description: 'whether the node is ascending or descending, default is ascending', type: 'boolean', value: '—', default: 'false' }]

export const document: ElDocument = { attributes }

export default document
