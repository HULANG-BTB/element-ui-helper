import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'split-button',
    description: '下拉触发元素呈现为按钮组',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placement',
    description: '菜单弹出位置',
    type: 'string',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end',
    default: 'bottom-end'
  },
  {
    name: 'trigger',
    description: '触发下拉的行为',
    type: 'string',
    value: 'hover, click',
    default: 'hover'
  },
  {
    name: 'hide-on-click',
    description: '是否在点击菜单项后隐藏菜单',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-timeout',
    description: '展开下拉菜单的延时（仅在 trigger 为 hover 时有效）',
    type: 'number',
    value: '—',
    default: '250'
  },
  {
    name: 'hide-timeout',
    description: '收起下拉菜单的延时（仅在 trigger 为 hover 时有效）',
    type: 'number',
    value: '—',
    default: '150'
  },
  {
    name: 'tabindex',
    description: 'Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)',
    type: 'number',
    value: '—',
    default: '0'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'click',
    description: '`split-button` 为 true 时，点击左侧按钮的回调',
    parameter: '—'
  },
  {
    name: 'command',
    description: '点击菜单项触发的事件回调',
    parameter: 'dropdown-item 的指令'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '出现则为 true，隐藏则为 false'
  }
]

export const slots: DocumentSlot[] = [
  {
    name: '—',
    description: '触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件'
  },
  {
    name: 'dropdown',
    description: '下拉列表，通常是 `<el-dropdown-menu>` 组件'
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
