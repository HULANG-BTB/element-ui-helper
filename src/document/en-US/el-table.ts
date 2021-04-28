import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'data', description: 'Table data', type: 'array', value: '—', default: '—' },
  {
    name: 'height',
    description:
      "Table's height. By default it has an `auto` height. If its value is a number, the height is measured in pixels; if its value is a string, the value will be assigned to element's style.height, the height is affected by external styles",
    type: 'string/number',
    value: '—',
    default: '—'
  },
  { name: 'max-height', description: "Table's max-height. The legal value is a number or the height in px.", type: 'string/number', value: '—', default: '—' },
  { name: 'stripe', description: 'whether Table is striped', type: 'boolean', value: '—', default: 'false' },
  { name: 'border', description: 'whether Table has vertical border', type: 'boolean', value: '—', default: 'false' },
  { name: 'size', description: 'size of Table', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'fit', description: 'whether width of column automatically fits its container', type: 'boolean', value: '—', default: 'true' },
  { name: 'show-header', description: 'whether Table header is visible', type: 'boolean', value: '—', default: 'true' },
  { name: 'highlight-current-row', description: 'whether current row is highlighted', type: 'boolean', value: '—', default: 'false' },
  { name: 'current-row-key', description: 'key of current row, a set only prop', type: 'string,number', value: '—', default: '—' },
  {
    name: 'row-class-name',
    description: 'function that returns custom class names for a row, or a string assigning class names for every row',
    type: 'Function({row, rowIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'row-style',
    description: 'function that returns custom style for a row, or an object assigning custom style for every row',
    type: 'Function({row, rowIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-class-name',
    description: 'function that returns custom class names for a cell, or a string assigning class names for every cell',
    type: 'Function({row, column, rowIndex, columnIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-style',
    description: 'function that returns custom style for a cell, or an object assigning custom style for every cell',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-row-class-name',
    description: 'function that returns custom class names for a row in table header, or a string assigning class names for every row in table header',
    type: 'Function({row, rowIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'header-row-style',
    description: 'function that returns custom style for a row in table header, or an object assigning custom style for every row in table header',
    type: 'Function({row, rowIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-class-name',
    description: 'function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header',
    type: 'Function({row, column, rowIndex, columnIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-style',
    description: 'function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'row-key',
    description:
      'key of row data, used for optimizing rendering. Required if `reserve-selection` is on or display tree data. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used.',
    type: 'Function(row)/String',
    value: '—',
    default: '—'
  },
  { name: 'empty-text', description: 'Displayed text when data is empty. You can customize this area with `slot="empty"`', type: 'String', value: '—', default: 'No Data' },
  {
    name: 'default-expand-all',
    description: 'whether expand all rows by default, works when the table has a column type="expand" or contains tree structure data',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-row-keys',
    description: "set expanded rows by this prop, prop's value is the keys of expand rows, you should set row-key before using this prop",
    type: 'Array',
    value: '—',
    default: ''
  },
  {
    name: 'default-sort',
    description: 'set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order',
    type: 'Object',
    value: '`order`: ascending, descending',
    default: 'if `prop` is set, and `order` is not set, then `order` is default to ascending'
  },
  { name: 'tooltip-effect', description: 'tooltip `effect` property', type: 'String', value: 'dark/light', default: '' },
  { name: 'show-summary', description: 'whether to display a summary row', type: 'Boolean', value: '—', default: 'false' },
  { name: 'sum-text', description: 'displayed text for the first column of summary row', type: 'String', value: '—', default: 'Sum' },
  { name: 'summary-method', description: 'custom summary method', type: 'Function({ columns, data })', value: '—', default: '—' },
  { name: 'span-method', description: 'method that returns rowspan and colspan', type: 'Function({ row, column, rowIndex, columnIndex })', value: '—', default: '—' },
  {
    name: 'select-on-indeterminate',
    description: 'controls the behavior of master checkbox in multi-select tables when only some rows are selected (but not all). If true, all rows will be selected, else deselected.',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  { name: 'indent', description: 'horizontal indentation of tree data', type: 'Number', value: '—', default: '16' },
  { name: 'lazy', description: 'whether to lazy loading data', type: 'Boolean', value: '—', default: '—' },
  { name: 'load', description: 'method for loading child row data, only works when `lazy` is true', type: 'Function(row, treeNode, resolve)', value: '—', default: '—' },
  { name: 'tree-props', description: 'configuration for rendering nested data', type: 'Object', value: '—', default: "{ hasChildren: 'hasChildren', children: 'children' }" }
]

export const methods: DocumentMethod[] = [
  { name: 'clearSelection', description: 'used in multiple selection Table, clear user selection', parameter: '—' },
  {
    name: 'toggleRowSelection',
    description: 'used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected',
    parameter: 'row, selected'
  },
  { name: 'toggleAllSelection', description: 'used in multiple selection Table, toggle the selected state of all rows', parameter: '-' },
  {
    name: 'toggleRowExpansion',
    description: 'used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed',
    parameter: 'row, expanded'
  },
  { name: 'setCurrentRow', description: 'used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection.', parameter: 'row' },
  { name: 'clearSort', description: 'clear sorting, restore data to the original order', parameter: '—' },
  { name: 'clearFilter', description: 'clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters', parameter: 'columnKeys' },
  { name: 'doLayout', description: 'refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout', parameter: '—' },
  { name: 'sort', description: 'sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order', parameter: 'prop: string, order: string' }
]

export const events: DocumentEvent[] = [
  { name: 'select', description: 'triggers when user clicks the checkbox in a row', parameter: 'selection, row' },
  { name: 'select-all', description: 'triggers when user clicks the checkbox in table header', parameter: 'selection' },
  { name: 'selection-change', description: 'triggers when selection changes', parameter: 'selection' },
  { name: 'cell-mouse-enter', description: 'triggers when hovering into a cell', parameter: 'row, column, cell, event' },
  { name: 'cell-mouse-leave', description: 'triggers when hovering out of a cell', parameter: 'row, column, cell, event' },
  { name: 'cell-click', description: 'triggers when clicking a cell', parameter: 'row, column, cell, event' },
  { name: 'cell-dblclick', description: 'triggers when double clicking a cell', parameter: 'row, column, cell, event' },
  { name: 'row-click', description: 'triggers when clicking a row', parameter: 'row, column, event' },
  { name: 'row-contextmenu', description: 'triggers when user right clicks on a row', parameter: 'row, column, event' },
  { name: 'row-dblclick', description: 'triggers when double clicking a row', parameter: 'row, column, event' },
  { name: 'header-click', description: 'triggers when clicking a column header', parameter: 'column, event' },
  { name: 'header-contextmenu', description: 'triggers when user right clicks on a column header', parameter: 'column, event' },
  { name: 'sort-change', description: "triggers when Table's sorting changes", parameter: '{ column, prop, order }' },
  { name: 'filter-change', description: "column's key. If you need to use the filter-change event, this attribute is mandatory to identify which column is being filtered", parameter: 'filters' },
  { name: 'current-change', description: 'triggers when current row changes', parameter: 'currentRow, oldCurrentRow' },
  { name: 'header-dragend', description: "triggers after changing a column's width by dragging the column header's border", parameter: 'newWidth, oldWidth, column, event' },
  {
    name: 'expand-change',
    description: 'triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded)',
    parameter: 'row, (expandedRows \\'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'append',
    description:
      'Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one.'
  }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
