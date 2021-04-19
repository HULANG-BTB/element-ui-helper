import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

export const attributes: DocumentAttribute[] = [{ name: 'reverse', description: 'whether the node is ascending or descending, default is ascending', type: 'boolean', value: '—', default: 'false' }]

export const document: ElDocument = { attributes }

export default document
