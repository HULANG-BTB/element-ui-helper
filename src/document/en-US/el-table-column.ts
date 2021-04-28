import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description:
      'type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon.',
    type: 'string',
    value: 'selection/index/expand',
    default: '—'
  },
  { name: 'index', description: 'customize indices for each row, works on columns with `type=index`', type: 'number, Function(index)', value: '-', default: '-' },
  { name: 'label', description: 'column label', type: 'string', value: '—', default: '—' },
  {
    name: 'column-key',
    description: "column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered",
    type: 'string',
    value: 'string',
    default: '—'
  },
  { name: 'prop', description: 'field name. You can also use its alias: `property`', type: 'string', value: '—', default: '—' },
  { name: 'width', description: 'column width', type: 'string', value: '—', default: '—' },
  {
    name: 'min-width',
    description: 'column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion',
    type: 'string',
    value: '—',
    default: '—'
  },
  { name: 'fixed', description: 'whether column is fixed at left/right. Will be fixed at left if `true`', type: 'string/boolean', value: 'true/left/right', default: '—' },
  { name: 'render-header', description: 'render function for table header of this column', type: 'Function(h, { column, $index })', value: '—', default: '—' },
  {
    name: 'sortable',
    description: "whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table",
    type: 'boolean, string',
    value: 'true, false, custom',
    default: 'false'
  },
  { name: 'sort-method', description: 'sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort', type: 'Function(a, b)', value: '—', default: '—' },
  {
    name: 'sort-by',
    description:
      'specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal',
    type: 'Function(row, index)/String/Array',
    value: '—',
    default: '—'
  },
  {
    name: 'sort-orders',
    description:
      'the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array',
    type: 'array',
    value: 'the elements in the array need to be one of the following: `ascending`, `descending` and `null` (restores to the original order)',
    default: "['ascending', 'descending', null]"
  },
  { name: 'resizable', description: 'whether column width can be resized, works when `border` of `el-table` is `true`', type: 'boolean', value: '—', default: 'false' },
  { name: 'formatter', description: 'function that formats cell content', type: 'Function(row, column, cellValue, index)', value: '—', default: '—' },
  { name: 'show-overflow-tooltip', description: 'whether to hide extra content and show them in a tooltip when hovering on the cell', type: 'boolean', value: '—', default: 'false' },
  { name: 'align', description: 'alignment', type: 'string', value: 'left/center/right', default: 'left' },
  {
    name: 'header-align',
    description: 'alignment of the table header. If omitted, the value of the above `align` attribute will be applied',
    type: 'String',
    value: 'left/center/right',
    default: '—'
  },
  { name: 'class-name', description: 'class name of cells in the column', type: 'string', value: '—', default: '—' },
  { name: 'label-class-name', description: 'class name of the label of this column', type: 'string', value: '—', default: '—' },
  { name: 'selectable', description: "function that determines if a certain row can be selected, works when `type` is 'selection'", type: 'Function(row, index)', value: '—', default: '—' },
  {
    name: 'reserve-selection',
    description: "whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work",
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  { name: 'filters', description: 'an array of data filtering options. For each element in this array, `text` and `value` are required', type: 'Array[{ text, value }]', value: '—', default: '—' },
  { name: 'filter-placement', description: 'placement for the filter dropdown', type: 'String', value: "same as Tooltip's `placement`", default: '—' },
  { name: 'filter-multiple', description: 'whether data filtering supports multiple options', type: 'Boolean', value: '—', default: 'true' },
  {
    name: 'filter-method',
    description: 'data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`',
    type: 'Function(value, row, column)',
    value: '—',
    default: '—'
  },
  { name: 'filtered-value', description: 'filter value for selected data, might be useful when table header is rendered with `render-header`', type: 'Array', value: '—', default: '—' }
]

export const scopedSlots: DocumentScopedSlot[] = [
  { name: '—', description: 'Custom content for table columns. The scope parameter is { row, column, $index }' },
  { name: 'header', description: 'Custom content for table header. The scope parameter is { column, $index }' }
]

export const document: ElDocument = { attributes, scopedSlots }

export default document
