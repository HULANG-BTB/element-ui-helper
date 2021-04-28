import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'timestamp', description: 'timestamp content', type: 'string', value: '-', default: '—' },
  { name: 'hide-timestamp', description: 'whether to show timestamp', type: 'boolean', value: '—', default: 'false' },
  { name: 'placement', description: 'position of timestamp', type: 'string', value: 'top / bottom', default: 'bottom' },
  { name: 'type', description: 'node type', type: 'string', value: 'primary / success / warning / danger / info', default: '-' },
  { name: 'color', description: 'background color of node', type: 'string', value: 'hsl / hsv / hex / rgb', default: '-' },
  { name: 'size', description: 'node size', type: 'string', value: 'normal / large', default: 'normal' },
  { name: 'icon', description: 'icon class name', type: 'string', value: '—', default: '-' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Custom content for timeline item' },
  { name: 'dot', description: 'Custom defined node' }
]

export const document: ElDocument = { attributes, slots }

export default document
