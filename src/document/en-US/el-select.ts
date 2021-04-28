import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'boolean / string / number', value: '—', default: '—' },
  { name: 'multiple', description: 'whether multiple-select is activated', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether Select is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'value-key', description: 'unique identity key name for value, required when value is an object', type: 'string', value: '—', default: 'value' },
  { name: 'size', description: 'size of Input', type: 'string', value: 'large/small/mini', default: '—' },
  { name: 'clearable', description: 'whether select can be cleared', type: 'boolean', value: '—', default: 'false' },
  { name: 'collapse-tags', description: 'whether to collapse tags to a text when multiple selecting', type: 'boolean', value: '—', default: 'false' },
  { name: 'multiple-limit', description: 'maximum number of options user can select when `multiple` is `true`. No limit when set to 0', type: 'number', value: '—', default: '0' },
  { name: 'name', description: 'the name attribute of select input', type: 'string', value: '—', default: '—' },
  { name: 'autocomplete', description: 'the autocomplete attribute of select input', type: 'string', value: '—', default: 'off' },
  { name: 'auto-complete', description: '@DEPRECATED in next major version', type: 'string', value: '—', default: 'off' },
  { name: 'placeholder', description: 'placeholder', type: 'string', value: '—', default: 'Select' },
  { name: 'filterable', description: 'whether Select is filterable', type: 'boolean', value: '—', default: 'false' },
  { name: 'allow-create', description: 'whether creating new items is allowed. To use this, `filterable` must be true', type: 'boolean', value: '—', default: 'false' },
  { name: 'filter-method', description: 'custom filter method', type: 'function', value: '—', default: '—' },
  { name: 'remote', description: 'whether options are loaded from server', type: 'boolean', value: '—', default: 'false' },
  { name: 'remote-method', description: 'custom remote search method', type: 'function', value: '—', default: '—' },
  { name: 'loading', description: 'whether Select is loading data from server', type: 'boolean', value: '—', default: 'false' },
  { name: 'loading-text', description: 'displayed text while loading data from server', type: 'string', value: '—', default: 'Loading' },
  { name: 'no-match-text', description: 'displayed text when no data matches the filtering query, you can also use slot `empty`', type: 'string', value: '—', default: 'No matching data' },
  { name: 'no-data-text', description: 'displayed text when there is no options, you can also use slot `empty`', type: 'string', value: '—', default: 'No data' },
  { name: 'popper-class', description: "custom class name for Select's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'reserve-keyword', description: 'when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option', type: 'boolean', value: '—', default: 'false' },
  { name: 'default-first-option', description: 'select first matching option on enter key. Use with `filterable` or `remote`', type: 'boolean', value: '-', default: 'false' },
  {
    name: 'popper-append-to-body',
    description: 'whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  { name: 'automatic-dropdown', description: 'for non-filterable Select, this prop decides if the option menu pops up when the input is focused', type: 'boolean', value: '-', default: 'false' }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: 'focus the Input component', parameter: '-' },
  { name: 'blur', description: 'blur the Input component, and hide the dropdown', parameter: '-' }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when the selected value changes', parameter: 'current selected value' },
  { name: 'visible-change', description: 'triggers when the dropdown appears/disappears', parameter: 'true when it appears, and false otherwise' },
  { name: 'remove-tag', description: 'triggers when a tag is removed in multiple mode', parameter: 'removed tag value' },
  { name: 'clear', description: 'triggers when the clear icon is clicked in a clearable Select', parameter: '—' },
  { name: 'blur', description: 'triggers when Input blurs', parameter: '(event: Event)' },
  { name: 'focus', description: 'triggers when Input focuses', parameter: '(event: Event)' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Option component list' },
  { name: 'prefix', description: 'content as Select prefix' },
  { name: 'empty', description: 'content when there is no options' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
