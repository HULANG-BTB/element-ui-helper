import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'title', description: 'Title', type: 'String', value: '—', default: '—' },
  { name: 'confirm-button-text', description: 'Confirm button text', type: 'String', value: '—', default: '—' },
  { name: 'cancel-button-text', description: 'Cancel button text', type: 'String', value: '—', default: '—' },
  { name: 'confirm-button-type', description: 'Confirm button type', type: 'String', value: '—', default: 'Primary' },
  { name: 'cancel-button-type', description: 'Cancel button type', type: 'String', value: '—', default: 'Text' },
  { name: 'icon', description: 'Icon', type: 'String', value: '—', default: 'el-icon-question' },
  { name: 'icon-color', description: 'Icon color', type: 'String', value: '—', default: '#f90' },
  { name: 'hide-icon', description: 'is hide Icon', type: 'Boolean', value: '—', default: 'false' }
]

export const events: DocumentEvent[] = [
  { name: 'confirm', description: 'triggers when click confirm button', parameter: '—' },
  { name: 'cancel', description: 'triggers when click cancel button', parameter: '—' }
]

export const slots: DocumentSlot[] = [{ name: 'reference', description: 'HTML element that triggers Popconfirm' }]

export const document: ElDocument = { attributes, events, slots }

export default document
