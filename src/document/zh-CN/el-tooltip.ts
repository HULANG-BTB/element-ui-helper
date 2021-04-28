import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'effect',
    description: '默认提供的主题',
    type: 'String',
    value: 'dark/light',
    default: 'dark'
  },
  {
    name: 'content',
    description: '显示的内容，也可以通过 `slot#content` 传入 DOM',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'placement',
    description: 'Tooltip 的出现位置',
    type: 'String',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  {
    name: 'value / v-model',
    description: '状态是否可见',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: 'Tooltip 是否可用',
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
    default: 'el-fade-in-linear'
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
    default: "{ boundariesElement: 'body', gpuAcceleration: false }"
  },
  {
    name: 'open-delay',
    description: '延迟出现，单位毫秒',
    type: 'Number',
    value: '—',
    default: '0'
  },
  {
    name: 'manual',
    description: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效',
    type: 'Boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'popper-class',
    description: '为 Tooltip 的 popper 添加类名',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'enterable',
    description: '鼠标是否可进入到 tooltip 中',
    type: 'Boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'hide-after',
    description: 'Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'tabindex',
    description: 'Tooltip 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)',
    type: 'number',
    value: '—',
    default: '0'
  }
]

export const document: ElDocument = { attributes }

export default document
