import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'

const attributes: DocumentAttribute[] = [
  {
    name: 'index',
    description: 'unique identification',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'popper-class',
    description: 'custom class name for the popup menu',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-timeout',
    description: 'timeout before showing a sub-menu',
    type: 'number',
    value: '—',
    default: 300
  },
  {
    name: 'hide-timeout',
    description: 'timeout before hiding a sub-menu',
    type: 'number',
    value: '—',
    default: 300
  },
  {
    name: 'disabled',
    description: 'whether the sub-menu is disabled',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'popper-append-to-body',
    description: 'whether to append the popup menu to body. If the positioning of the menu is wrong, you can try setting this prop',
    type: 'boolean',
    value: '-',
    default: 'level one Submenu: true / other Submenus: false'
  }
]

export const document: ElDocument = { attributes }

export default document
