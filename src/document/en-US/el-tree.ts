import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentScopedSlot } from '@/document'
import { DocumentMethod } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'data', description: 'tree data', type: 'array', value: '—', default: '—' },
  { name: 'empty-text', description: 'text displayed when data is void', type: 'string', value: '—', default: '—' },
  { name: 'node-key', description: 'unique identity key name for nodes, its value should be unique across the whole tree', type: 'string', value: '—', default: '—' },
  { name: 'props', description: 'configuration options, see the following table', type: 'object', value: '—', default: '—' },
  { name: 'render-after-expand', description: 'whether to render child nodes only after a parent node is expanded for the first time', type: 'boolean', value: '—', default: 'true' },
  { name: 'load', description: 'method for loading subtree data, only works when `lazy` is true', type: 'function(node, resolve)', value: '—', default: '—' },
  { name: 'render-content', description: 'render function for tree node', type: 'Function(h, { node, data, store }', value: '—', default: '—' },
  { name: 'highlight-current', description: 'whether current node is highlighted', type: 'boolean', value: '—', default: 'false' },
  { name: 'default-expand-all', description: 'whether to expand all nodes by default', type: 'boolean', value: '—', default: 'false' },
  {
    name: 'expand-on-click-node',
    description: 'whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'check-on-click-node',
    description: 'whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  { name: 'auto-expand-parent', description: 'whether to expand father node when a child node is expanded', type: 'boolean', value: '—', default: 'true' },
  { name: 'default-expanded-keys', description: 'array of keys of initially expanded nodes', type: 'array', value: '—', default: '—' },
  { name: 'show-checkbox', description: 'whether node is selectable', type: 'boolean', value: '—', default: 'false' },
  { name: 'check-strictly', description: 'whether checked state of a node not affects its father and child nodes when `show-checkbox` is `true`', type: 'boolean', value: '—', default: 'false' },
  { name: 'default-checked-keys', description: 'array of keys of initially checked nodes', type: 'array', value: '—', default: '—' },
  { name: 'current-node-key', description: 'key of initially selected node', type: 'string, number', value: '—', default: '—' },
  {
    name: 'filter-node-method',
    description: 'this function will be executed on each node when use filter method. if return `false`, tree node will be hidden.',
    type: 'Function(value, data, node)',
    value: '—',
    default: '—'
  },
  { name: 'accordion', description: 'whether only one node among the same level can be expanded at one time', type: 'boolean', value: '—', default: 'false' },
  { name: 'indent', description: 'horizontal indentation of nodes in adjacent levels in pixels', type: 'number', value: '—', default: '16' },
  { name: 'icon-class', description: 'custome tree node icon', type: 'string', value: '-', default: '-' },
  { name: 'lazy', description: 'whether to lazy load leaf node, used with `load` attribute', type: 'boolean', value: '—', default: 'false' },
  { name: 'draggable', description: 'whether enable tree nodes drag and drop', type: 'boolean', value: '—', default: 'false' },
  { name: 'allow-drag', description: 'this function will be executed before dragging a node. If `false` is returned, the node can not be dragged', type: 'Function(node)', value: '—', default: '—' },
  {
    name: 'allow-drop',
    description:
      "this function will be executed before the dragging node is dropped. If `false` is returned, the dragging node can not be dropped at the target node. `type` has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)",
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
  { name: 'Attribute', description: 'Description', type: 'Type', value: 'Accepted Values', default: 'Default' },
  { name: 'label', description: "specify which key of node object is used as the node's label", type: 'string, function(data, node)', value: '—', default: '—' },
  { name: 'children', description: "specify which node object is used as the node's subtree", type: 'string', value: '—', default: '—' },
  { name: 'disabled', description: "specify which key of node object represents if node's checkbox is disabled", type: 'boolean, function(data, node)', value: '—', default: '—' },
  { name: 'isLeaf', description: 'specify whether the node is a leaf node, only works when lazy load is enabled', type: 'boolean, function(data, node)', value: '—', default: '—' }
]

export const methods: DocumentMethod[] = [
  {
    name: 'filter',
    description: 'filter all tree nodes, filtered nodes will be hidden',
    parameter: 'Accept a parameter which will be used as first parameter for filter-node-method'
  },
  {
    name: 'updateKeyChildren',
    description: 'set new data to node, only works when `node-key` is assigned',
    parameter: '(key, data) Accept two parameters: 1. key of node 2. new data'
  },
  {
    name: 'getCheckedNodes',
    description: 'If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes',
    parameter:
      '(leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes. 2. default value is `false`. If the parameter is `true`, the return value contains halfchecked nodes'
  },
  {
    name: 'setCheckedNodes',
    description: 'set certain nodes to be checked, only works when `node-key` is assigned',
    parameter: 'an array of nodes to be checked'
  },
  {
    name: 'getCheckedKeys',
    description: "If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of node's keys",
    parameter: '(leafOnly) Accept a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes.'
  },
  {
    name: 'setCheckedKeys',
    description: 'set certain nodes to be checked, only works when `node-key` is assigned',
    parameter:
      "(keys, leafOnly) Accept two parameters: 1. an array of node's keys to be checked 2. a boolean type parameter whose default value is `false`. If the parameter is `true`, it only returns the currently selected array of sub-nodes."
  },
  {
    name: 'setChecked',
    description: 'set node to be checked or not, only works when `node-key` is assigned',
    parameter:
      "(key/data, checked, deep) Accept three parameters: 1. node's key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not."
  },
  {
    name: 'getHalfCheckedNodes',
    description: 'If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of nodes',
    parameter: '-'
  },
  {
    name: 'getHalfCheckedKeys',
    description: "If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of node's keys",
    parameter: '-'
  },
  {
    name: 'getCurrentKey',
    description: "return the highlight node's key (null if no node is highlighted)",
    parameter: '—'
  },
  {
    name: 'getCurrentNode',
    description: "return the highlight node's data (null if no node is highlighted)",
    parameter: '—'
  },
  {
    name: 'setCurrentKey',
    description: 'set highlighted node by key, only works when `node-key` is assigned',
    parameter: "(key) the node's key to be highlighted. If `null`, cancel the currently highlighted node"
  },
  {
    name: 'setCurrentNode',
    description: 'set highlighted node, only works when `node-key` is assigned',
    parameter: '(node) the node to be highlighted'
  },
  {
    name: 'getNode',
    description: 'get node by data or key',
    parameter: "(data) the node's data or key"
  },
  {
    name: 'remove',
    description: 'remove a node, only works when node-key is assigned',
    parameter: "(data) the node's data or node to be deleted"
  },
  {
    name: 'append',
    description: 'append a child node to a given node in the tree',
    parameter: "(data, parentNode) 1. child node's data to be appended 2. parent node's data, key or node"
  },
  {
    name: 'insertBefore',
    description: 'insert a node before a given node in the tree',
    parameter: "(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node"
  },
  {
    name: 'insertAfter',
    description: 'insert a node after a given node in the tree',
    parameter: "(data, refNode) 1. node's data to be inserted 2. reference node's data, key or node"
  }
]

export const events: DocumentEvent[] = [
  { name: 'node-click', description: 'triggers when a node is clicked', parameter: 'three parameters: node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself' },
  {
    name: 'node-contextmenu',
    description: 'triggers when a node is clicked by right button',
    parameter: 'four parameters: event, node object corresponding to the node clicked, `node` property of TreeNode, TreeNode itself'
  },
  {
    name: 'check-change',
    description: 'triggers when the selected state of the node changes',
    parameter: "three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes"
  },
  {
    name: 'check',
    description: 'triggers after clicking the checkbox of a node',
    parameter:
      'two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys'
  },
  { name: 'current-change', description: 'triggers when current node changes', parameter: 'two parameters: node object corresponding to the current node, `node` property of TreeNode' },
  { name: 'node-expand', description: 'triggers when current node open', parameter: 'three parameters: node object corresponding to the node opened, `node` property of TreeNode, TreeNode itself' },
  { name: 'node-collapse', description: 'triggers when current node close', parameter: 'three parameters: node object corresponding to the node closed, `node` property of TreeNode, TreeNode itself' },
  { name: 'node-drag-start', description: 'triggers when dragging starts', parameter: 'two parameters: node object corresponding to the dragging node, event.' },
  {
    name: 'node-drag-enter',
    description: 'triggers when the dragging node enters another node',
    parameter: 'three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.'
  },
  {
    name: 'node-drag-leave',
    description: 'triggers when the dragging node leaves a node',
    parameter: 'three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.'
  },
  {
    name: 'node-drag-over',
    description: 'triggers when dragging over a node (like mouseover event)',
    parameter: 'three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.'
  },
  {
    name: 'node-drag-end',
    description: 'triggers when dragging ends',
    parameter:
      'four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be `undefined`), node drop type (before / after / inner), event.'
  },
  {
    name: 'node-drop',
    description: 'triggers after the dragging node is dropped',
    parameter: 'four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.'
  }
]

export const scopedSlots: DocumentScopedSlot[] = [{ name: '—', description: 'Custom content for tree nodes. The scope parameter is { node, data }' }]

export const document: ElDocument = { attributes, events, scopedSlots }

export default document
