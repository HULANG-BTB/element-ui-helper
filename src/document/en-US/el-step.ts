import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: 'step title', type: 'string', value: '—', default: '—' },
  { name: 'description', description: 'step description', type: 'string', value: '—', default: '—' },
  { name: 'icon', description: 'step icon', type: "step icon's class name. Icons can be passed via named slot as well", value: 'string', default: '—' },
  { name: 'status', description: 'current status. It will be automatically set by Steps if not configured.', type: 'wait / process / finish / error / success', value: '-', default: '' }
]

export const slots: DocumentSlot[] = [
  { name: 'icon', description: 'custom icon' },
  { name: 'title', description: 'step title' },
  { name: 'description', description: 'step description' }
]

export const document: ElDocument = { attributes, slots }

export default document
