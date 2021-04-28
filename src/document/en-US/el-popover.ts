import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'trigger', description: 'how the popover is triggered', type: 'string', value: 'click/focus/hover/manual', default: 'click' },
  { name: 'title', description: 'popover title', type: 'string', value: '—', default: '—' },
  { name: 'content', description: 'popover content, can be replaced with a default `slot`', type: 'string', value: '—', default: '—' },
  { name: 'width', description: 'popover width', type: 'string, number', value: '—', default: 'Min width 150px' },
  {
    name: 'placement',
    description: 'popover placement',
    type: 'string',
    value: 'top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end',
    default: 'bottom'
  },
  { name: 'disabled', description: 'whether Popover is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'value / v-model', description: 'whether popover is visible', type: 'Boolean', value: '—', default: 'false' },
  { name: 'offset', description: 'popover offset', type: 'number', value: '—', default: '0' },
  { name: 'transition', description: 'popover transition animation', type: 'string', value: '—', default: 'el-fade-in-linear' },
  {
    name: 'visible-arrow',
    description: 'whether a tooltip arrow is displayed or not. For more info, please refer to [Vue-popper](https://github.com/element-component/vue-popper)',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'popper-options',
    description: 'parameters for [popper.js](https://popper.js.org/documentation.html)',
    type: 'object',
    value: 'please refer to [popper.js](https://popper.js.org/documentation.html)',
    default: "`{ boundariesElement: 'body', gpuAcceleration: false }`"
  },
  { name: 'popper-class', description: 'custom class name for popover', type: 'string', value: '—', default: '—' },
  { name: 'open-delay', description: 'delay before appearing when `trigger` is hover, in milliseconds', type: 'number', value: '—', default: '—' },
  { name: 'close-delay', description: 'delay before disappearing when `trigger` is hover, in milliseconds', type: 'number', value: '—', default: '200' },
  { name: 'tabindex', description: '[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Popover', type: 'number', value: '—', default: '0' }
]

export const events: DocumentEvent[] = [
  { name: 'show', description: 'triggers when popover shows', parameter: '—' },
  { name: 'after-enter', description: 'triggers when the entering transition ends', parameter: '—' },
  { name: 'hide', description: 'triggers when popover hides', parameter: '—' },
  { name: 'after-leave', description: 'triggers when the leaving transition ends', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'text content of popover' },
  { name: 'reference', description: 'HTML element that triggers popover' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
