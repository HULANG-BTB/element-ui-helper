import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'data',
    description: '显示的数据',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'height',
    description: 'Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'max-height',
    description: 'Table 的最大高度。合法的值为数字或者单位为 px 的高度。',
    type: 'string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'stripe',
    description: '是否为斑马纹 table',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'border',
    description: '是否带有纵向边框',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Table 的尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'fit',
    description: '列的宽度是否自撑开',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-header',
    description: '是否显示表头',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'highlight-current-row',
    description: '是否要高亮当前行',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'current-row-key',
    description: '当前行的 key，只写属性',
    type: 'String,Number',
    value: '—',
    default: '—'
  },
  {
    name: 'row-class-name',
    description: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
    type: 'Function({row, rowIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'row-style',
    description: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
    type: 'Function({row, rowIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-class-name',
    description: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
    type: 'Function({row, column, rowIndex, columnIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'cell-style',
    description: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-row-class-name',
    description: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
    type: 'Function({row, rowIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'header-row-style',
    description: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
    type: 'Function({row, rowIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-class-name',
    description: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
    type: 'Function({row, column, rowIndex, columnIndex})/String',
    value: '—',
    default: '—'
  },
  {
    name: 'header-cell-style',
    description: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
    type: 'Function({row, column, rowIndex, columnIndex})/Object',
    value: '—',
    default: '—'
  },
  {
    name: 'row-key',
    description:
      '行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。',
    type: 'Function(row)/String',
    value: '—',
    default: '—'
  },
  {
    name: 'empty-text',
    description: '空数据时显示的文本内容，也可以通过 `slot="empty"` 设置',
    type: 'String',
    value: '—',
    default: '暂无数据'
  },
  {
    name: 'default-expand-all',
    description: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-row-keys',
    description: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
    type: 'Array',
    value: '—',
    default: ''
  },
  {
    name: 'default-sort',
    description: '默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序',
    type: 'Object',
    value: '`order`: ascending, descending',
    default: '如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending'
  },
  {
    name: 'tooltip-effect',
    description: 'tooltip `effect` 属性',
    type: 'String',
    value: 'dark/light',
    default: ''
  },
  {
    name: 'show-summary',
    description: '是否在表尾显示合计行',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'sum-text',
    description: '合计行第一列的文本',
    type: 'String',
    value: '—',
    default: '合计'
  },
  {
    name: 'summary-method',
    description: '自定义的合计计算方法',
    type: 'Function({ columns, data })',
    value: '—',
    default: '—'
  },
  {
    name: 'span-method',
    description: '合并行或列的计算方法',
    type: 'Function({ row, column, rowIndex, columnIndex })',
    value: '—',
    default: '—'
  },
  {
    name: 'select-on-indeterminate',
    description: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'indent',
    description: '展示树形数据时，树节点的缩进',
    type: 'Number',
    value: '—',
    default: '16'
  },
  {
    name: 'lazy',
    description: '是否懒加载子节点数据',
    type: 'Boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'load',
    description: '加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息',
    type: 'Function(row, treeNode, resolve)',
    value: '—',
    default: '—'
  },
  {
    name: 'tree-props',
    description: '渲染嵌套数据的配置选项',
    type: 'Object',
    value: '—',
    default: "{ hasChildren: 'hasChildren', children: 'children' }"
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'clearSelection',
    description: '用于多选表格，清空用户的选择',
    parameter: '—'
  },
  {
    name: 'toggleRowSelection',
    description: '用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
    parameter: 'row, selected'
  },
  {
    name: 'toggleAllSelection',
    description: '用于多选表格，切换所有行的选中状态',
    parameter: '-'
  },
  {
    name: 'toggleRowExpansion',
    description: '用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）',
    parameter: 'row, expanded'
  },
  {
    name: 'setCurrentRow',
    description: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
    parameter: 'row'
  },
  {
    name: 'clearSort',
    description: '用于清空排序条件，数据会恢复成未排序的状态',
    parameter: '—'
  },
  {
    name: 'clearFilter',
    description: '不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件',
    parameter: 'columnKey'
  },
  {
    name: 'doLayout',
    description: '对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法',
    parameter: '—'
  },
  {
    name: 'sort',
    description: '手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。',
    parameter: 'prop: string, order: string'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '当用户手动勾选数据行的 Checkbox 时触发的事件',
    parameter: 'selection, row'
  },
  {
    name: 'select-all',
    description: '当用户手动勾选全选 Checkbox 时触发的事件',
    parameter: 'selection'
  },
  {
    name: 'selection-change',
    description: '当选择项发生变化时会触发该事件',
    parameter: 'selection'
  },
  {
    name: 'cell-mouse-enter',
    description: '当单元格 hover 进入时会触发该事件',
    parameter: 'row, column, cell, event'
  },
  {
    name: 'cell-mouse-leave',
    description: '当单元格 hover 退出时会触发该事件',
    parameter: 'row, column, cell, event'
  },
  {
    name: 'cell-click',
    description: '当某个单元格被点击时会触发该事件',
    parameter: 'row, column, cell, event'
  },
  {
    name: 'cell-dblclick',
    description: '当某个单元格被双击击时会触发该事件',
    parameter: 'row, column, cell, event'
  },
  {
    name: 'row-click',
    description: '当某一行被点击时会触发该事件',
    parameter: 'row, column, event'
  },
  {
    name: 'row-contextmenu',
    description: '当某一行被鼠标右键点击时会触发该事件',
    parameter: 'row, column, event'
  },
  {
    name: 'row-dblclick',
    description: '当某一行被双击时会触发该事件',
    parameter: 'row, column, event'
  },
  {
    name: 'header-click',
    description: '当某一列的表头被点击时会触发该事件',
    parameter: 'column, event'
  },
  {
    name: 'header-contextmenu',
    description: '当某一列的表头被鼠标右键点击时触发该事件',
    parameter: 'column, event'
  },
  {
    name: 'sort-change',
    description: '当表格的排序条件发生变化的时候会触发该事件',
    parameter: '{ column, prop, order }'
  },
  {
    name: 'filter-change',
    description: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
    parameter: 'filters'
  },
  {
    name: 'current-change',
    description: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
    parameter: 'currentRow, oldCurrentRow'
  },
  {
    name: 'header-dragend',
    description: '当拖动表头改变了列的宽度的时候会触发该事件',
    parameter: 'newWidth, oldWidth, column, event'
  },
  {
    name: 'expand-change',
    description: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）',
    parameter: 'row, (expandedRows \\'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'append',
    description: '插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。'
  }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
