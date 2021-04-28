import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'number', value: '—', default: '0' },
  { name: 'min', description: 'minimum value', type: 'number', value: '—', default: '0' },
  { name: 'max', description: 'maximum value', type: 'number', value: '—', default: '100' },
  { name: 'disabled', description: 'whether Slider is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'step', description: 'step size', type: 'number', value: '—', default: '1' },
  { name: 'show-input', description: 'whether to display an input box, works when `range` is false', type: 'boolean', value: '—', default: 'false' },
  { name: 'show-input-controls', description: 'whether to display control buttons when `show-input` is true', type: 'boolean', value: '—', default: 'true' },
  { name: 'input-size', description: 'size of the input box', type: 'string', value: 'large / medium / small / mini', default: 'small' },
  { name: 'show-stops', description: 'whether to display breakpoints', type: 'boolean', value: '—', default: 'false' },
  { name: 'show-tooltip', description: 'whether to display tooltip value', type: 'boolean', value: '—', default: 'true' },
  { name: 'format-tooltip', description: 'format to display tooltip value', type: 'function(value)', value: '—', default: '—' },
  { name: 'range', description: 'whether to select a range', type: 'boolean', value: '—', default: 'false' },
  { name: 'vertical', description: 'vertical mode', type: 'boolean', value: '—', default: 'false' },
  { name: 'height', description: 'Slider height, required in vertical mode', type: 'string', value: '—', default: '—' },
  { name: 'label', description: 'label for screen reader', type: 'string', value: '—', default: '—' },
  { name: 'debounce', description: 'debounce delay when typing, in milliseconds, works when `show-input` is true', type: 'number', value: '—', default: '300' },
  { name: 'tooltip-class', description: 'custom class name for the tooltip', type: 'string', value: '—', default: '—' },
  { name: 'marks', description: 'marks， type of key must be `number` and must in closed interval `[min, max]`, each mark can custom style', type: 'object', value: '—', default: '—' }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when the value changes (if the mouse is being dragged, this event only fires when the mouse is released)', parameter: 'value after changing' },
  { name: 'input', description: "triggers when the data changes (It'll be emitted in real time during sliding)", parameter: 'value after changing' }
]

export const document: ElDocument = { attributes, events }

export default document
