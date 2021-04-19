import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

export const attributes: DocumentAttribute[] = [{ name: 'width', description: 'width of the side section', type: 'string', value: '—', default: '300px' }]

export const document: ElDocument = { attributes }

export default document
