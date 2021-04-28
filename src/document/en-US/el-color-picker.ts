import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'string', value: '—', default: '—' },
  { name: 'disabled', description: 'whether to disable the ColorPicker', type: 'boolean', value: '—', default: 'false' },
  { name: 'size', description: 'size of ColorPicker', type: 'string', value: '—', default: 'medium / small / mini' },
  { name: 'show-alpha', description: 'whether to display the alpha slider', type: 'boolean', value: '—', default: 'false' },
  { name: 'color-format', description: 'color format of v-model', type: 'string', value: 'hsl / hsv / hex / rgb', default: 'hex (when show-alpha is false)/ rgb (when show-alpha is true)' },
  { name: 'popper-class', description: "custom class name for ColorPicker's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'predefine', description: 'predefined color options', type: 'array', value: '—', default: '—' }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when input value changes', parameter: 'color value' },
  { name: 'active-change', description: 'triggers when the current active color changes', parameter: 'active color value' }
]

export const document: ElDocument = { attributes, events }

export default document
