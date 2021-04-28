import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'size', description: 'button size', type: 'string', value: 'medium / small / mini', default: '—' },
  { name: 'type', description: 'button type', type: 'string', value: 'primary / success / warning / danger / info / text', default: '—' },
  { name: 'plain', description: "determine whether it's a plain button", type: 'boolean', value: '—', default: 'false' },
  { name: 'round', description: "determine whether it's a round button", type: 'boolean', value: '—', default: 'false' },
  { name: 'circle', description: "determine whether it's a circle button", type: 'boolean', value: '—', default: 'false' },
  { name: 'loading', description: "determine whether it's loading", type: 'boolean', value: '—', default: 'false' },
  { name: 'disabled', description: 'disable the button', type: 'boolean', value: '—', default: 'false' },
  { name: 'icon', description: 'icon class name', type: 'string', value: '—', default: '—' },
  { name: 'autofocus', description: "same as native button's `autofocus`", type: 'boolean', value: '—', default: 'false' },
  { name: 'native-type', description: "same as native button's `type`", type: 'string', value: 'button / submit / reset', default: 'button' }
]

export const document: ElDocument = { attributes }

export default document
