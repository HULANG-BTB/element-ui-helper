import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'number', value: '—', default: '0' },
  { name: 'min', description: 'the minimum allowed value', type: 'number', value: '—', default: '`-Infinity`' },
  { name: 'max', description: 'the maximum allowed value', type: 'number', value: '—', default: '`Infinity`' },
  { name: 'step', description: 'incremental step', type: 'number', value: '—', default: '1' },
  { name: 'step-strictly', description: 'whether input value can only be multiple of step', type: 'boolean', value: '—', default: 'false' },
  { name: 'precision', description: 'precision of input value', type: 'number', value: '—', default: '—' },
  { name: 'size', description: 'size of the component', type: 'string', value: 'large/small', default: '—' },
  { name: 'disabled', description: 'whether the component is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'controls', description: 'whether to enable the control buttons', type: 'boolean', value: '—', default: 'true' },
  { name: 'controls-position', description: 'position of the control buttons', type: 'string', value: 'right', default: '-' },
  { name: 'name', description: 'same as `name` in native input', type: 'string', value: '—', default: '—' },
  { name: 'label', description: 'label text', type: 'string', value: '—', default: '—' },
  { name: 'placeholder', description: 'placeholder in input', type: 'string', value: '-', default: '-' }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: 'focus the Input component', parameter: '-' },
  { name: 'select', description: 'select the text in input element', parameter: '—' }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when the value changes', parameter: 'currentValue, oldValue' },
  { name: 'blur', description: 'triggers when Input blurs', parameter: '(event: Event)' },
  { name: 'focus', description: 'triggers when Input focuses', parameter: '(event: Event)' }
]

export const document: ElDocument = { attributes, methods, events }

export default document
