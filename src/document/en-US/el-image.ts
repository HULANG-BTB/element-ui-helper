import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'src', description: 'Image source, same as native', type: 'string', value: '—', default: '-' },
  {
    name: 'fit',
    description: 'Indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)',
    type: 'string',
    value: 'fill / contain / cover / none / scale-down',
    default: '-'
  },
  { name: 'alt', description: 'Native alt', type: 'string', value: '-', default: '-' },
  { name: 'referrer-policy', description: 'Native referrerPolicy', type: 'string', value: '-', default: '-' },
  { name: 'lazy', description: 'Whether to use lazy load', type: 'boolean', value: '—', default: 'false' },
  {
    name: 'scroll-container',
    description: 'The container to add scroll listener when using lazy load',
    type: 'string / HTMLElement',
    value: '—',
    default: 'The nearest parent container whose overflow property is auto or scroll'
  },
  { name: 'preview-src-list', description: 'allow big image preview', type: 'Array', value: '—', default: '-' },
  { name: 'z-index', description: 'set image preview z-index', type: 'Number', value: '—', default: '2000' }
]

export const events: DocumentEvent[] = [
  { name: 'load', description: 'Same as native load', parameter: '(e: Event)' },
  { name: 'error', description: 'Same as native error', parameter: '(e: Error)' }
]

export const slots: DocumentSlot[] = [
  { name: 'placeholder', description: 'Triggers when image load' },
  { name: 'error', description: 'Triggers when image load failed' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
