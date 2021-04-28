import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: '-', value: '—', default: '—' },
  { name: 'options', description: 'data of the options，the key of `value` and `label` can be customize by `Props`.', type: 'array', value: '—', default: '—' },
  { name: 'props', description: 'configuration options, see the following table.', type: 'object', value: '—', default: '—' },
  { name: 'size', description: 'size of input', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'placeholder', description: 'placeholder of input', type: 'string', value: '—', default: 'Select' },
  { name: 'disabled', description: 'whether Cascader is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'clearable', description: 'whether selected value can be cleared', type: 'boolean', value: '—', default: 'false' },
  { name: 'show-all-levels', description: 'whether to display all levels of the selected value in the input', type: 'boolean', value: '—', default: 'true' },
  { name: 'collapse-tags', description: 'whether to collapse tags in multiple selection mode', type: 'boolean', value: '-', default: 'false' },
  { name: 'separator', description: 'option label separator', type: 'string', value: '—', default: "' / '" },
  { name: 'filterable', description: 'whether the options can be searched', type: 'boolean', value: '—', default: '—' },
  {
    name: 'filter-method',
    description: 'customize search logic, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.',
    type: 'function(node, keyword)',
    value: '-',
    default: '-'
  },
  { name: 'debounce', description: 'debounce delay when typing filter keyword, in milliseconds', type: 'number', value: '—', default: '300' },
  {
    name: 'before-filter',
    description: 'hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted',
    type: 'function(value)',
    value: '—',
    default: '—'
  },
  { name: 'popper-class', description: "custom class name for Cascader's dropdown", type: 'string', value: '—', default: '—' }
]

export const methods: DocumentMethod[] = [
  { name: 'getCheckedNodes', description: 'get an array of currently selected node', parameter: '(leafOnly) whether only return the leaf checked nodes, default is `false`' }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when the binding value changes', parameter: 'value' },
  { name: 'expand-change', description: 'triggers when expand option changes', parameter: "an array of the expanding node's parent nodes" },
  { name: 'blur', description: 'triggers when Cascader blurs', parameter: '(event: Event)' },
  { name: 'focus', description: 'triggers when Cascader focuses', parameter: '(event: Event)' },
  { name: 'visible-change', description: 'triggers when the dropdown appears/disappears', parameter: 'true when it appears, and false otherwise' },
  { name: 'remove-tag', description: 'triggers when remove tag in multiple selection mode', parameter: 'the value of the tag which is removed' }
]

export const slots: DocumentSlot[] = [
  { name: '-', description: 'the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively.' },
  { name: 'empty', description: 'content when there is no matched options.' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
