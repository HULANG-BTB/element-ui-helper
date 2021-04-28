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
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '请选择'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'clearable',
    description: '是否支持清空选项',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-all-levels',
    description: '输入框中是否显示选中值的完整路径',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'collapse-tags',
    description: '多选模式下是否折叠Tag',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'separator',
    description: '选项分隔符',
    type: 'string',
    value: '—',
    default: "斜杠' / '"
  },
  {
    name: 'filterable',
    description: '是否可搜索选项',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'filter-method',
    description: '自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中',
    type: 'function(node, keyword)',
    value: '-',
    default: '-'
  },
  {
    name: 'debounce',
    description: '搜索关键词输入的去抖延迟，毫秒',
    type: 'number',
    value: '—',
    default: '300'
  },
  {
    name: 'before-filter',
    description: '筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选',
    type: 'function(value)',
    value: '—',
    default: '—'
  },
  {
    name: 'popper-class',
    description: '自定义浮层类名',
    type: 'string',
    value: '—',
    default: '—'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'getCheckedNodes',
    description: '获取选中的节点',
    parameter: '(leafOnly) 是否只是叶子节点，默认值为 `false`'
  }
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
  },
  {
    name: 'blur',
    description: '当失去焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'focus',
    description: '当获得焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '出现则为 true，隐藏则为 false'
  },
  {
    name: 'remove-tag',
    description: '在多选模式下，移除Tag时触发',
    parameter: '移除的Tag对应的节点的值'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '-',
    description: '自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据'
  },
  { name: 'empty', description: '无匹配选项时的内容' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
