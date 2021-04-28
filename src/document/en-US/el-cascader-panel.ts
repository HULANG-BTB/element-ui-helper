import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: '-', value: '—', default: '—' },
  { name: 'options', description: 'data of the options，the key of `value` and `label` can be customize by `Props`.', type: 'array', value: '—', default: '—' },
  { name: 'props', description: 'configuration options, see the following table.', type: 'object', value: '—', default: '—' }
]

export const methods: DocumentMethod[] = [
  { name: 'getCheckedNodes', description: 'get an array of currently selected node', parameter: '(leafOnly) whether only return the leaf checked nodes, default is `false`' },
  { name: 'clearCheckedNodes', description: 'clear checked nodes', parameter: '-' }
]

export const events: DocumentEvent[] = [
  { name: 'change', description: 'triggers when the binding value changes', parameter: 'value' },
  { name: 'expand-change', description: 'triggers when expand option changes', parameter: "an array of the expanding node's parent nodes" }
]

export const slots: DocumentSlot[] = [{ name: '-', description: 'the custom content of cascader node, the parameter is { node, data }, which are current Node object and node data respectively.' }]

export const props = [
  { name: 'Attribute', description: 'Description' },
  { name: 'expandTrigger', description: 'trigger mode of expanding options' },
  { name: 'multiple', description: 'whether multiple selection is enabled' },
  { name: 'checkStrictly', description: 'whether checked state of a node not affects its parent and child nodes' },
  { name: 'emitPath', description: "when checked nodes change, whether to emit an array of node's path, if false, only emit the value of node." },
  { name: 'lazy', description: 'whether to dynamic load child nodes, use with `lazyload` attribute' },
  { name: 'lazyLoad', description: 'method for loading child nodes data, only works when `lazy` is true' },
  { name: 'value', description: "specify which key of node object is used as the node's value" },
  { name: 'label', description: "specify which key of node object is used as the node's label" },
  { name: 'children', description: "specify which key of node object is used as the node's children" },
  { name: 'disabled', description: "specify which key of node object is used as the node's disabled" },
  { name: 'leaf', description: "specify which key of node object is used as the node's leaf field" }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
