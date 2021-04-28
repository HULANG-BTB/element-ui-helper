import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: 'type of input',
    type: 'string',
    value: 'text, textarea and other [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)',
    default: 'text'
  },
  { name: 'value / v-model', description: 'binding value', type: 'string / number', value: '—', default: '—' },
  { name: 'maxlength', description: 'same as `maxlength` in native input', type: 'number', value: '—', default: '—' },
  { name: 'minlength', description: 'same as `minlength` in native input', type: 'number', value: '—', default: '—' },
  { name: 'show-word-limit', description: "whether show word count，only works when `type` is 'text' or 'textarea'", type: 'boolean', value: '—', default: 'false' },
  { name: 'placeholder', description: 'placeholder of Input', type: 'string', value: '—', default: '—' },
  { name: 'clearable', description: 'whether to show clear button', type: 'boolean', value: '—', default: 'false' },
  { name: 'show-password', description: 'whether to show toggleable password input', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether Input is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'size', description: "size of Input, works when `type` is not 'textarea'", type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'prefix-icon', description: 'prefix icon class', type: 'string', value: '—', default: '—' },
  { name: 'suffix-icon', description: 'suffix icon class', type: 'string', value: '—', default: '—' },
  { name: 'rows', description: "number of rows of textarea, only works when `type` is 'textarea'", type: 'number', value: '—', default: '2' },
  {
    name: 'autosize',
    description: "whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }",
    type: 'boolean / object',
    value: '—',
    default: 'false'
  },
  { name: 'autocomplete', description: 'same as `autocomplete` in native input', type: 'string', value: 'on/off', default: 'off' },
  { name: 'auto-complete', description: '@DEPRECATED in next major version', type: 'string', value: 'on/off', default: 'off' },
  { name: 'name', description: 'same as `name` in native input', type: 'string', value: '—', default: '—' },
  { name: 'readonly', description: 'same as `readonly` in native input', type: 'boolean', value: '—', default: 'false' },
  { name: 'max', description: 'same as `max` in native input', type: '—', value: '—', default: '—' },
  { name: 'min', description: 'same as `min` in native input', type: '—', value: '—', default: '—' },
  { name: 'step', description: 'same as `step` in native input', type: '—', value: '—', default: '—' },
  { name: 'resize', description: 'control the resizability', type: 'string', value: 'none, both, horizontal, vertical', default: '—' },
  { name: 'autofocus', description: 'same as `autofocus` in native input', type: 'boolean', value: '—', default: 'false' },
  { name: 'form', description: 'same as `form` in native input', type: 'string', value: '—', default: '—' },
  { name: 'label', description: 'label text', type: 'string', value: '—', default: '—' },
  { name: 'tabindex', description: 'input tabindex', type: 'string', value: '-', default: '-' },
  { name: 'validate-event', description: 'whether to trigger form validation', type: 'boolean', value: '-', default: 'true' }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: 'focus the input element', parameter: '—' },
  { name: 'blur', description: 'blur the input element', parameter: '—' },
  { name: 'select', description: 'select the text in input element', parameter: '—' }
]

export const events: DocumentEvent[] = [
  { name: 'blur', description: 'triggers when Input blurs', parameter: '(event: Event)' },
  { name: 'focus', description: 'triggers when Input focuses', parameter: '(event: Event)' },
  { name: 'change', description: 'triggers only when the input box loses focus or the user presses Enter', parameter: '(value: string \\' },
  { name: 'input', description: 'triggers when the Input value change', parameter: '(value: string \\' },
  { name: 'clear', description: 'triggers when the Input is cleared by clicking the clear button', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: "content as Input prefix, only works when `type` is 'text'" },
  { name: 'suffix', description: "content as Input suffix, only works when `type` is 'text'" },
  { name: 'prepend', description: "content to prepend before Input, only works when `type` is 'text'" },
  { name: 'append', description: "content to append after Input, only works when `type` is 'text'" }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
