import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值，选中选项卡的 name',
    type: 'string',
    value: '—',
    default: '第一个选项卡的 name'
  },
  {
    name: 'type',
    description: '风格类型',
    type: 'string',
    value: 'card/border-card',
    default: '—'
  },
  {
    name: 'closable',
    description: '标签是否可关闭',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'addable',
    description: '标签是否可增加',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'editable',
    description: '标签是否同时可增加和关闭',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'tab-position',
    description: '选项卡所在位置',
    type: 'string',
    value: 'top/right/bottom/left',
    default: 'top'
  },
  {
    name: 'stretch',
    description: '标签的宽度是否自撑开',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'before-leave',
    description: '切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。',
    type: 'Function(activeName, oldActiveName)',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'tab-click',
    description: 'tab 被选中时触发',
    parameter: '被选中的标签 tab 实例'
  },
  {
    name: 'tab-remove',
    description: '点击 tab 移除按钮后触发',
    parameter: '被删除的标签的 name'
  },
  {
    name: 'tab-add',
    description: '点击 tabs 的新增按钮后触发',
    parameter: '—'
  },
  {
    name: 'edit',
    description: '点击 tabs 的新增按钮或 tab 被关闭后触发',
    parameter: '(targetName, action)'
  }
]

export const document: ElDocument = { attributes, events }

export default document
