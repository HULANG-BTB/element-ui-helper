import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'icon', description: 'set representation type to Icon, more info on Icon Component', type: 'string', value: '', default: '' },
  { name: 'size', description: 'set avatar size', type: 'number/string', value: 'number / large / medium / small', default: 'large' },
  { name: 'shape', description: 'set avatar shape', type: 'string', value: 'circle / square', default: 'circle' },
  { name: 'src', description: 'the address of the image for an image avatar', type: 'string', value: '', default: '' },
  { name: 'srcSet', description: 'A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use', type: 'string', value: '', default: '' },
  { name: 'alt', description: 'This attribute defines an alternative text description of the image', type: 'string', value: '', default: '' },
  { name: 'fit', description: 'set how the image fit its container for an image avatar', type: 'string', value: 'fill / contain / cover / none / scale-down', default: 'cover' }
]

export const events: DocumentEvent[] = [{ name: 'error', description: 'handler when img load error, return false to prevent default fallback behavior', parameter: '(e: Event)' }]

export const document: ElDocument = { attributes, events }

export default document
