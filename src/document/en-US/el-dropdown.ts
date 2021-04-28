import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'type', description: 'menu button type, refer to `Button` Component, only works when `split-button` is true', type: 'string', value: '—', default: '—' },
  { name: 'size', description: 'menu size, also works on the split button', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'split-button', description: 'whether a button group is displayed', type: 'boolean', value: '—', default: 'false' },
  { name: 'placement', description: 'placement of pop menu', type: 'string', value: 'top/top-start/top-end/bottom/bottom-start/bottom-end', default: 'bottom-end' },
  { name: 'trigger', description: 'how to trigger', type: 'string', value: 'hover/click', default: 'hover' },
  { name: 'hide-on-click', description: 'whether to hide menu after clicking menu-item', type: 'boolean', value: '—', default: 'true' },
  { name: 'show-timeout', description: 'Delay time before show a dropdown (only works when trigger is `hover`)', type: 'number', value: '—', default: '250' },
  { name: 'hide-timeout', description: 'Delay time before hide a dropdown (only works when trigger is `hover`)', type: 'number', value: '—', default: '150' },
  { name: 'tabindex', description: '[tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of Dropdown', type: 'number', value: '—', default: '0' }
]

export const events: DocumentEvent[] = [
  { name: 'click', description: 'if `split-button` is `true`, triggers when left button is clicked', parameter: '—' },
  { name: 'command', description: 'triggers when a dropdown item is clicked', parameter: 'the command dispatched from the dropdown item' },
  { name: 'visible-change', description: 'triggers when the dropdown appears/disappears', parameter: 'true when it appears, and false otherwise' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'content of Dropdown. Notice: Must be a valid html dom element (ex. `<span>, <button> etc.`) or `el-component`, to attach the trigger listener' },
  { name: 'dropdown', description: 'content of the Dropdown Menu, usually a `<el-dropdown-menu>` element' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
