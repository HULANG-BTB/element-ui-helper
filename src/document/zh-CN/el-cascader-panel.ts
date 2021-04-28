import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '选中项绑定值',
    type: '-',
    value: '—',
    default: '—'
  },
  {
    name: 'options',
    description: '可选项数据源，键名可通过 `Props` 属性配置',
    type: 'array',
    value: '—',
    default: '—'
  },
  {
    name: 'props',
    description: '配置选项，具体见下表',
    type: 'object',
    value: '—',
    default: '—'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'getCheckedNodes',
    description: '获取选中的节点数组',
    parameter: '(leafOnly) 是否只是叶子节点，默认值为 `false`'
  },
  { name: 'clearCheckedNodes', description: '清空选中的节点', parameter: '-' }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当选中节点变化时触发',
    parameter: '选中节点的值'
  },
  {
    name: 'expand-change',
    description: '当展开节点发生变化时触发',
    parameter: '各父级选项值组成的数组'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'
  }
]

export const document: ElDocument = { attributes, methods, events, slots }

const props = [
  { name: 'expandTrigger', description: '次级菜单的展开方式' },
  { name: 'multiple', description: '是否多选' },
  { name: 'checkStrictly', description: '是否严格的遵守父子节点不互相关联' },
  {
    name: 'emitPath',
    description: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值'
  },
  {
    name: 'lazy',
    description: '是否动态加载子节点，需与 lazyLoad 方法结合使用'
  },
  {
    name: 'lazyLoad',
    description: '加载动态数据的方法，仅在 lazy 为 true 时有效'
  },
  { name: 'value', description: '指定选项的值为选项对象的某个属性值' },
  { name: 'label', description: '指定选项标签为选项对象的某个属性值' },
  { name: 'children', description: '指定选项的子选项为选项对象的某个属性值' },
  { name: 'disabled', description: '指定选项的禁用为选项对象的某个属性值' },
  {
    name: 'leaf',
    description: '指定选项的叶子节点的标志位为选项对象的某个属性值'
  }
]

export default document
