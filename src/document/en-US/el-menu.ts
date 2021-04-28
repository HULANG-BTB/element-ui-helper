import { ElDocument } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const methods: DocumentMethod[] = [
  { name: 'open', description: 'open a specific sub-menu', parameter: 'index: index of the sub-menu to open' },
  { name: 'close', description: 'close a specific sub-menu', parameter: 'index: index of the sub-menu to close' }
]

export const events: DocumentEvent[] = [
  { name: 'select', description: 'callback function when menu is activated', parameter: 'index: index of activated menu, indexPath: index path of activated menu' },
  { name: 'open', description: 'callback function when sub-menu expands', parameter: 'index: index of expanded sub-menu, indexPath: index path of expanded sub-menu' },
  { name: 'close', description: 'callback function when sub-menu collapses', parameter: 'index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu' }
]

export const document: ElDocument = { methods, events }

export default document
