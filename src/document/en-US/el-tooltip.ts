import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'effect', description: 'Tooltip theme', type: 'string', value: 'dark/light', default: 'dark' },
  { name: 'content', description: 'display content, can be overridden by `slot#content`', type: 'String', value: '—', default: '—' },
  {
    name: 'placement',
    description: 'position of Tooltip',
    type: 'string',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  { name: 'value / v-model', description: 'visibility of Tooltip', type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'whether Tooltip is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'offset', description: 'offset of the Tooltip', type: 'number', value: '—', default: '0' },
  { name: 'transition', description: 'animation name', type: 'string', value: '—', default: 'el-fade-in-linear' },
  {
    name: 'visible-arrow',
    description: 'whether an arrow is displayed. For more information, check [Vue-popper](https://github.com/element-component/vue-popper) page',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popper-options',
    description: '[popper.js](https://popper.js.org/documentation.html) parameters',
    type: 'Object',
    value: 'refer to [popper.js](https://popper.js.org/documentation.html) doc',
    default: "`{ boundariesElement: 'body', gpuAcceleration: false }`"
  },
  { name: 'open-delay', description: 'delay of appearance, in millisecond', type: 'number', value: '—', default: '0' },
  { name: 'manual', description: "whether to control Tooltip manually. `mouseenter` and `mouseleave` won't have effects if set to `true`", type: 'boolean', value: '—', default: 'false' },
  { name: 'popper-class', description: "custom class name for Tooltip's popper", type: 'string', value: '—', default: '—' },
  { name: 'enterable', description: 'whether the mouse can enter the tooltip', type: 'Boolean', value: '—', default: 'true' },
  { name: 'hide-after', description: 'timeout in milliseconds to hide tooltip', type: 'number', value: '—', default: '0' },
  { name: 'tabindex', description: '[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Tooltip', type: 'number', value: '—', default: '0' }
]

export const document: ElDocument = { attributes }

export default document
