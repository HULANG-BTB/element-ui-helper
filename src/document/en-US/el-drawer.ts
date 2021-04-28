import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'append-to-body',
    description: 'Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to **true**',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'before-close',
    description: 'If set, closing procedure will be halted',
    type: 'function(done), done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure',
    value: '—',
    default: '—'
  },
  { name: 'close-on-press-escape', description: 'Indicates whether Drawer can be closed by pressing ESC', type: 'boolean', value: '—', default: 'true' },
  { name: 'custom-class', description: 'Extra class names for Drawer', type: 'string', value: '—', default: '—' },
  { name: 'destroy-on-close', description: 'Indicates whether children should be destroyed after Drawer closed', type: 'boolean', value: '-', default: 'false' },
  { name: 'modal', description: 'Should show shadowing layer', type: 'boolean', value: '—', default: 'true' },
  { name: 'modal-append-to-body', description: 'Indicates should shadowing layer be insert into DocumentBody element', type: 'boolean', value: '—', default: 'true' },
  { name: 'direction', description: "Drawer's opening direction", type: 'Direction', value: 'rtl / ltr / ttb / btt', default: 'rtl' },
  { name: 'show-close', description: 'Should show close button at the top right of Drawer', type: 'boolean', value: '—', default: 'true' },
  {
    name: 'size',
    description:
      "Drawer's size, if Drawer is horizontal mode, it effects the width property, otherwise it effects the height property, when size is `number` type, it describes the size by unit of pixels; when size is `string` type, it should be used with `x%` notation, other wise it will be interpreted to pixel unit",
    type: 'number / string',
    value: '-',
    default: "'30%'"
  },
  { name: 'title', description: "Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form", type: 'string', value: '—', default: '—' },
  { name: 'visible', description: 'Should Drawer be displayed, also support the `.sync` notation', type: 'boolean', value: '—', default: 'false' },
  { name: 'wrapperClosable', description: 'Indicates whether user can close Drawer by clicking the shadowing layer.', type: 'boolean', value: '-', default: 'true' },
  {
    name: 'withHeader',
    description: "Flag that controls the header section's existance, default to true, when withHeader set to false, both `title attribute` and `title slot` won't work",
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const methods: DocumentMethod[] = [{ name: 'closeDrawer', description: 'In order to close Drawer, this method will call `before-close`.', parameter: '' }]

export const events: DocumentEvent[] = [
  { name: 'open', description: 'Triggered before Drawer opening animation begins', parameter: '—' },
  { name: 'opened', description: 'Triggered after Drawer opening animation ended', parameter: '—' },
  { name: 'close', description: 'Triggered before Drawer closing animation begins', parameter: '—' },
  { name: 'closed', description: 'Triggered after Drawer closing animation ended', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: "Drawer's Content" },
  { name: 'title', description: 'Drawer Title Section' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
