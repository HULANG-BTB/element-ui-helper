import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'placeholder', description: 'the placeholder of Autocomplete', type: 'string', value: '—', default: '—' },
  { name: 'clearable', description: 'whether to show clear button', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether Autocomplete is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'value-key', description: 'key name of the input suggestion object for display', type: 'string', value: '—', default: 'value' },
  { name: 'icon', description: 'icon name', type: 'string', value: '—', default: '—' },
  { name: 'value', description: 'binding value', type: 'string', value: '—', default: '—' },
  { name: 'debounce', description: 'debounce delay when typing, in milliseconds', type: 'number', value: '—', default: '300' },
  { name: 'placement', description: 'placement of the popup menu', type: 'string', value: 'top / top-start / top-end / bottom / bottom-start / bottom-end', default: 'bottom-start' },
  {
    name: 'fetch-suggestions',
    description: 'a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete',
    type: 'Function(queryString, callback)',
    value: '—',
    default: '—'
  },
  { name: 'popper-class', description: "custom class name for autocomplete's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'trigger-on-focus', description: 'whether show suggestions when input focus', type: 'boolean', value: '—', default: 'true' },
  { name: 'name', description: 'same as `name` in native input', type: 'string', value: '—', default: '—' },
  { name: 'select-when-unmatched', description: 'whether to emit a `select` event on enter when there is no autocomplete match', type: 'boolean', value: '—', default: 'false' },
  { name: 'label', description: 'label text', type: 'string', value: '—', default: '—' },
  { name: 'prefix-icon', description: 'prefix icon class', type: 'string', value: '—', default: '—' },
  { name: 'suffix-icon', description: 'suffix icon class', type: 'string', value: '—', default: '—' },
  { name: 'hide-loading', description: 'whether to hide the loading icon in remote search', type: 'boolean', value: '—', default: 'false' },
  {
    name: 'popper-append-to-body',
    description: 'whether to append the dropdown to body. If the positioning of the dropdown is wrong, you can try to set this prop to false',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  { name: 'highlight-first-item', description: 'whether to highlight first item in remote search suggestions by default', type: 'boolean', value: '—', default: 'false' }
]

export const methods: DocumentMethod[] = [{ name: 'focus', description: 'focus the input element', parameter: '—' }]

export const events: DocumentEvent[] = [
  { name: 'select', description: 'triggers when a suggestion is clicked', parameter: 'suggestion being clicked' },
  { name: 'change', description: 'triggers when the icon inside Input value change', parameter: '(value: string \\' }
]

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: 'content as Input prefix' },
  { name: 'suffix', description: 'content as Input suffix' },
  { name: 'prepend', description: 'content to prepend before Input' },
  { name: 'append', description: 'content to append after Input' }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: '—', description: 'Custom content for input suggestions. The scope parameter is { item }' }]

export const document: ElDocument = { attributes, methods, events, slots, scopedSlots }

export default document
