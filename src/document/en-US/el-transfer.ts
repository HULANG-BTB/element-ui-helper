import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'array', value: '—', default: '—' },
  { name: 'data', description: 'data source', type: 'array[{ key, label, disabled }]', value: '—', default: '[ ]' },
  { name: 'filterable', description: 'whether Transfer is filterable', type: 'boolean', value: '—', default: 'false' },
  { name: 'filter-placeholder', description: 'placeholder for the filter input', type: 'string', value: '—', default: 'Enter keyword' },
  { name: 'filter-method', description: 'custom filter method', type: 'function', value: '—', default: '—' },
  {
    name: 'target-order',
    description:
      'order strategy for elements in the target list. If set to `original`, the elements will keep the same order as the data source. If set to `push`, the newly added elements will be pushed to the bottom. If set to `unshift`, the newly added elements will be inserted on the top',
    type: 'string',
    value: 'original / push / unshift',
    default: 'original'
  },
  { name: 'titles', description: 'custom list titles', type: 'array', value: '—', default: "['List 1', 'List 2']" },
  { name: 'button-texts', description: 'custom button texts', type: 'array', value: '—', default: '[ ]' },
  { name: 'render-content', description: 'custom render function for data items', type: 'function(h, option)', value: '—', default: '—' },
  {
    name: 'format',
    description: 'texts for checking status in list header',
    type: 'object{noChecked, hasChecked}',
    value: '—',
    default: "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
  },
  { name: 'props', description: 'prop aliases for data source', type: 'object{key, label, disabled}', value: '—', default: '—' },
  { name: 'left-default-checked', description: 'key array of initially checked data items of the left list', type: 'array', value: '—', default: '[ ]' },
  { name: 'right-default-checked', description: 'key array of initially checked data items of the right list', type: 'array', value: '—', default: '[ ]' }
]

export const methods: DocumentMethod[] = [{ name: 'clearQuery', description: 'clear the filter keyword of a certain panel', parameter: "'left' / 'right'" }]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: 'triggers when data items change in the right list',
    parameter: 'key array of current data items in the right list, transfer direction (left or right), moved item keys'
  },
  {
    name: 'left-check-change',
    description: 'triggers when end user changes the checked state of any data item in the left list',
    parameter: 'key array of currently checked items, key array of items whose checked state have changed'
  },
  {
    name: 'right-check-change',
    description: 'triggers when end user changes the checked state of any data item in the right list',
    parameter: 'key array of currently checked items, key array of items whose checked state have changed'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'left-footer', description: 'content of left list footer' },
  { name: 'right-footer', description: 'content of right list footer' }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: '—', description: 'Custom content for data items. The scope parameter is { option }' }]

export const document: ElDocument = { attributes, methods, events, slots, scopedSlots }

export default document
