import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'height', description: 'height of the carousel', type: 'string', value: '—', default: '—' },
  { name: 'initial-index', description: 'index of the initially active slide (starting from 0)', type: 'number', value: '—', default: '0' },
  { name: 'trigger', description: 'how indicators are triggered', type: 'string', value: 'hover/click', default: 'hover' },
  { name: 'autoplay', description: 'whether automatically loop the slides', type: 'boolean', value: '—', default: 'true' },
  { name: 'interval', description: 'interval of the auto loop, in milliseconds', type: 'number', value: '—', default: '3000' },
  { name: 'indicator-position', description: 'position of the indicators', type: 'string', value: 'outside/none', default: '—' },
  { name: 'arrow', description: 'when arrows are shown', type: 'string', value: 'always/hover/never', default: 'hover' },
  { name: 'type', description: 'type of the Carousel', type: 'string', value: 'card', default: '—' },
  { name: 'loop', description: 'display the items in loop', type: 'boolean', value: '-', default: 'true' },
  { name: 'direction', description: 'display direction', type: 'string', value: 'horizontal/vertical', default: 'horizontal' }
]

export const methods: DocumentMethod[] = [
  { name: 'setActiveItem', description: 'manually switch slide', parameter: 'index of the slide to be switched to, starting from 0; or the `name` of corresponding `el-carousel-item`' },
  { name: 'prev', description: 'switch to the previous slide', parameter: '—' },
  { name: 'next', description: 'switch to the next slide', parameter: '—' }
]

export const events: DocumentEvent[] = [{ name: 'change', description: 'triggers when the active slide switches', parameter: 'index of the new active slide, index of the old active slide' }]

export const document: ElDocument = { attributes, methods, events }

export default document
