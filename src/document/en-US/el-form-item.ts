import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentSlot } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'prop',
    description: 'a key of `model`. In the use of validate and resetFields method, the attribute is required',
    type: 'string',
    value: 'keys of model that passed to `form`',
    default: ''
  },
  { name: 'label', description: 'label', type: 'string', value: '—', default: '—' },
  { name: 'label-width', description: "width of label, e.g. '50px'. Width `auto` is supported.", type: 'string', value: '—', default: '—' },
  { name: 'required', description: 'whether the field is required or not, will be determined by validation rules if omitted', type: 'boolean', value: '—', default: 'false' },
  { name: 'rules', description: 'validation rules of form', type: 'object', value: '—', default: '—' },
  { name: 'error', description: 'field error message, set its value and the field will validate error and show this message immediately', type: 'string', value: '—', default: '—' },
  { name: 'show-message', description: 'whether to show the error message', type: 'boolean', value: '—', default: 'true' },
  { name: 'inline-message', description: 'inline style validate message', type: 'boolean', value: '—', default: 'false' },
  { name: 'size', description: 'control the size of components in this form-item', type: 'string', value: 'medium / small / mini', default: '-' }
]

export const methods: DocumentMethod[] = [
  { name: 'resetField', description: 'reset current field and remove validation result', parameter: '—' },
  { name: 'clearValidate', description: 'remove validation status of the field', parameter: '-' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'content of Form Item' },
  { name: 'label', description: 'content of label' }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: 'error', description: 'Custom content to display validation message. The scope parameter is { error }' }]

export const document: ElDocument = { attributes, methods, slots, scopedSlots }

export default document
