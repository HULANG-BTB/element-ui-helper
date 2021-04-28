import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'trigger',
    description: '触发方式',
    type: 'String',
    value: 'click/focus/hover/manual',
    default: 'click'
  },
  {
    name: 'title',
    description: '标题',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'content',
    description: '显示的内容，也可以通过 `slot` 传入 DOM',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'width',
    description: '宽度',
    type: 'String, Number',
    value: '—',
    default: '最小宽度 150px'
  },
  {
    name: 'placement',
    description: '出现位置',
    type: 'String',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  {
    name: 'disabled',
    description: 'Popover 是否可用',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'value / v-model',
    description: '状态是否可见',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'offset',
    description: '出现位置的偏移量',
    type: 'Number',
    value: '—',
    default: '0'
  },
  {
    name: 'transition',
    description: '定义渐变动画',
    type: 'String',
    value: '—',
    default: 'fade-in-linear'
  },
  {
    name: 'visible-arrow',
    description: '是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper)',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popper-options',
    description: '[popper.js](https://popper.js.org/documentation.html) 的参数',
    type: 'Object',
    value: '参考 [popper.js](https://popper.js.org/documentation.html) 文档',
    default: "`{ boundariesElement: 'body', gpuAcceleration: false }`"
  },
  {
    name: 'popper-class',
    description: '为 popper 添加类名',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'open-delay',
    description: '触发方式为 hover 时的显示延迟，单位为毫秒',
    type: 'Number',
    value: '—',
    default: '—'
  },
  {
    name: 'close-delay',
    description: '触发方式为 hover 时的隐藏延迟，单位为毫秒',
    type: 'number',
    value: '—',
    default: '200'
  },
  {
    name: 'tabindex',
    description: 'Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)',
    type: 'number',
    value: '—',
    default: '0'
  }
]

export const events: DocumentEvent[] = [
  { name: 'show', description: '显示时触发', parameter: '—' },
  {
    name: 'after-enter',
    description: '显示动画播放完毕后触发',
    parameter: '—'
  },
  { name: 'hide', description: '隐藏时触发', parameter: '—' },
  {
    name: 'after-leave',
    description: '隐藏动画播放完毕后触发',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Popover 内嵌 HTML 文本' },
  { name: 'reference', description: '触发 Popover 显示的 HTML 元素' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
