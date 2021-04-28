import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'visible', description: 'visibility of Dialog, supports the .sync modifier', type: 'boolean', value: '—', default: 'false' },
  { name: 'title', description: 'title of Dialog. Can also be passed with a named slot (see the following table)', type: 'string', value: '—', default: '—' },
  { name: 'width', description: 'width of Dialog', type: 'string', value: '—', default: '50%' },
  { name: 'fullscreen', description: 'whether the Dialog takes up full screen', type: 'boolean', value: '—', default: 'false' },
  { name: 'top', description: 'value for `margin-top` of Dialog CSS', type: 'string', value: '—', default: '15vh' },
  { name: 'modal', description: 'whether a mask is displayed', type: 'boolean', value: '—', default: 'true' },
  {
    name: 'modal-append-to-body',
    description: "whether to append modal to body element. If false, the modal will be appended to Dialog's parent element",
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  { name: 'append-to-body', description: 'whether to append Dialog itself to body. A nested Dialog should have this attribute set to `true`', type: 'boolean', value: '—', default: 'false' },
  { name: 'lock-scroll', description: 'whether scroll of body is disabled while Dialog is displayed', type: 'boolean', value: '—', default: 'true' },
  { name: 'custom-class', description: 'custom class names for Dialog', type: 'string', value: '—', default: '—' },
  { name: 'close-on-click-modal', description: 'whether the Dialog can be closed by clicking the mask', type: 'boolean', value: '—', default: 'true' },
  { name: 'close-on-press-escape', description: 'whether the Dialog can be closed by pressing ESC', type: 'boolean', value: '—', default: 'true' },
  { name: 'show-close', description: 'whether to show a close button', type: 'boolean', value: '—', default: 'true' },
  { name: 'before-close', description: 'callback before Dialog closes, and it will prevent Dialog from closing', type: 'function(done)，done is used to close the Dialog', value: '—', default: '—' },
  { name: 'center', description: 'whether to align the header and footer in center', type: 'boolean', value: '—', default: 'false' },
  { name: 'destroy-on-close', description: 'Destroy elements in Dialog when closed', type: 'boolean', value: '—', default: 'false' }
]

export const events: DocumentEvent[] = [
  { name: 'open', description: 'triggers when the Dialog opens', parameter: '—' },
  { name: 'opened', description: 'triggers when the Dialog opening animation ends', parameter: '—' },
  { name: 'close', description: 'triggers when the Dialog closes', parameter: '—' },
  { name: 'closed', description: 'triggers when the Dialog closing animation ends', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'content of Dialog' },
  { name: 'title', description: 'content of the Dialog title' },
  { name: 'footer', description: 'content of the Dialog footer' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
