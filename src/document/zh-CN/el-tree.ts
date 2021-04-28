import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentScopedSlot } from '@/document'
import { DocumentMethod } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'data',
    description: '展示数据',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'empty-text',
    description: '内容为空的时候展示的文本',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'node-key',
    description: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'props',
    description: '配置选项，具体看下表',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'render-after-expand',
    description: '是否在第一次展开某个树节点后才渲染其子节点',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'load',
    description: '加载子树数据的方法，仅当 lazy 属性为true 时生效',
    type: 'function(node, resolve)',
    value: '—',
    default: '—'
  },
  {
    name: 'render-content',
    description: '树节点的内容区的渲染 Function',
    type: 'Function(h, { node, data, store }',
    value: '—',
    default: '—'
  },
  {
    name: 'highlight-current',
    description: '是否高亮当前选中节点，默认值是 false。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-expand-all',
    description: '是否默认展开所有节点',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'expand-on-click-node',
    description: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'check-on-click-node',
    description: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'auto-expand-parent',
    description: '展开子节点的时候是否自动展开父节点',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'default-expanded-keys',
    description: '默认展开的节点的 key 的数组',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'show-checkbox',
    description: '节点是否可被选择',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'check-strictly',
    description: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-checked-keys',
    description: '默认勾选的节点的 key 的数组',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'current-node-key',
    description: '当前选中的节点',
    type: 'string, number',
    value: '—',
    default: '—'
  },
  {
    name: 'filter-node-method',
    description: '对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
    type: 'Function(value, data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'accordion',
    description: '是否每次只打开一个同级树节点展开',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'indent',
    description: '相邻级节点间的水平缩进，单位为像素',
    type: 'number',
    value: '—',
    default: '16'
  },
  {
    name: 'icon-class',
    description: '自定义树节点的图标',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'lazy',
    description: '是否懒加载子节点，需与 load 方法结合使用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'draggable',
    description: '是否开启拖拽节点功能',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-drag',
    description: '判断节点能否被拖拽',
    type: 'Function(node)',
    value: '—',
    default: '—'
  },
  {
    name: 'allow-drop',
    description: "拖拽时判定目标节点能否被放置。`type` 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
    type: 'Function(draggingNode, dropNode, type)',
    value: '—',
    default: '—'
  },
  {
    name: 'Props',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  {
    name: 'label',
    description: '指定节点标签为节点对象的某个属性值',
    type: 'string, function(data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'children',
    description: '指定子树为节点对象的某个属性值',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '指定节点选择框是否禁用为节点对象的某个属性值',
    type: 'boolean, function(data, node)',
    value: '—',
    default: '—'
  },
  {
    name: 'isLeaf',
    description: '指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效',
    type: 'boolean, function(data, node)',
    value: '—',
    default: '—'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'filter',
    description: '对树节点进行筛选操作',
    parameter: '接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数'
  },
  {
    name: 'updateKeyChildren',
    description: '通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性',
    parameter: '(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组'
  },
  {
    name: 'getCheckedNodes',
    description: '若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组',
    parameter: '(leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为 `false` 2. 是否包含半选节点，默认值为 `false`'
  },
  {
    name: 'setCheckedNodes',
    description: '设置目前勾选的节点，使用此方法必须设置 node-key 属性',
    parameter: '(nodes) 接收勾选节点数据的数组'
  },
  {
    name: 'getCheckedKeys',
    description: '若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点的 key 所组成的数组',
    parameter: '(leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `false`'
  },
  {
    name: 'setCheckedKeys',
    description: '通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性',
    parameter: '(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `false`'
  },
  {
    name: 'setChecked',
    description: '通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性',
    parameter: '(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false'
  },
  {
    name: 'getHalfCheckedNodes',
    description: '若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点所组成的数组',
    parameter: '-'
  },
  {
    name: 'getHalfCheckedKeys',
    description: '若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点的 key 所组成的数组',
    parameter: '-'
  },
  {
    name: 'getCurrentKey',
    description: '获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null',
    parameter: '—'
  },
  {
    name: 'getCurrentNode',
    description: '获取当前被选中节点的 data，若没有节点被选中则返回 null',
    parameter: '—'
  },
  {
    name: 'setCurrentKey',
    description: '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
    parameter: '(key) 待被选节点的 key，若为 null 则取消当前高亮的节点'
  },
  {
    name: 'setCurrentNode',
    description: '通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
    parameter: '(node) 待被选节点的 node'
  },
  {
    name: 'getNode',
    description: '根据 data 或者 key 拿到 Tree 组件中的 node',
    parameter: '(data) 要获得 node 的 key 或者 data'
  },
  {
    name: 'remove',
    description: '删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性',
    parameter: '(data) 要删除的节点的 data 或者 node'
  },
  {
    name: 'append',
    description: '为 Tree 中的一个节点追加一个子节点',
    parameter: '(data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者 node'
  },
  {
    name: 'insertBefore',
    description: '为 Tree 的一个节点的前面增加一个节点',
    parameter: '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key 或者 node'
  },
  {
    name: 'insertAfter',
    description: '为 Tree 的一个节点的后面增加一个节点',
    parameter: '(data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key 或者 node'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'node-click',
    description: '节点被点击时的回调',
    parameter: '共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。'
  },
  {
    name: 'node-contextmenu',
    description: '当某一节点被鼠标右键点击时会触发该事件',
    parameter: '共四个参数，依次为：event、传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。'
  },
  {
    name: 'check-change',
    description: '节点选中状态发生变化时的回调',
    parameter: '共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点'
  },
  {
    name: 'check',
    description: '当复选框被点击的时候触发',
    parameter: '共两个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性'
  },
  {
    name: 'current-change',
    description: '当前选中节点变化时触发的事件',
    parameter: '共两个参数，依次为：当前节点的数据，当前节点的 Node 对象'
  },
  {
    name: 'node-expand',
    description: '节点被展开时触发的事件',
    parameter: '共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身'
  },
  {
    name: 'node-collapse',
    description: '节点被关闭时触发的事件',
    parameter: '共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身'
  },
  {
    name: 'node-drag-start',
    description: '节点开始拖拽时触发的事件',
    parameter: '共两个参数，依次为：被拖拽节点对应的 Node、event'
  },
  {
    name: 'node-drag-enter',
    description: '拖拽进入其他节点时触发的事件',
    parameter: '共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event'
  },
  {
    name: 'node-drag-leave',
    description: '拖拽离开某个节点时触发的事件',
    parameter: '共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event'
  },
  {
    name: 'node-drag-over',
    description: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）',
    parameter: '共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event'
  },
  {
    name: 'node-drag-end',
    description: '拖拽结束时（可能未成功）触发的事件',
    parameter: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event'
  },
  {
    name: 'node-drop',
    description: '拖拽成功完成时触发的事件',
    parameter: '共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event'
  }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: '—', description: '自定义树节点的内容，参数为 { node, data }' }]

export const document: ElDocument = { attributes, events, scopedSlots, methods }

export default document
