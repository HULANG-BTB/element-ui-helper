import { ElDocument } from 'typings/document'
import { DocumentAttribute } from 'typings/attribute'

export const attributes: DocumentAttribute[] = [{ name: 'height', description: 'height of the footer', type: 'string', value: '—', default: '60px' }]

export const document: ElDocument = { attributes }

export default document
