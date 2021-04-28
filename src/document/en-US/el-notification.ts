import { ElDocument } from '@/document'
import { DocumentMethod } from '@/document'

export const methods: DocumentMethod[] = [{ name: 'close', description: 'close the Notification', parameter: '' }]

export const document: ElDocument = { methods }

export default document
