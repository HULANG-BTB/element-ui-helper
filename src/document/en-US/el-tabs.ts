import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value, name of the selected tab', type: 'string', value: '—', default: 'name of first tab' },
  { name: 'type', description: 'type of Tab', type: 'string', value: 'card/border-card', default: '—' },
  { name: 'closable', description: 'whether Tab is closable', type: 'boolean', value: '—', default: 'false' },
  { name: 'addable', description: 'whether Tab is addable', type: 'boolean', value: '—', default: 'false' },
  { name: 'editable', description: 'whether Tab is addable and closable', type: 'boolean', value: '—', default: 'false' },
  { name: 'tab-position', description: 'position of tabs', type: 'string', value: 'top/right/bottom/left', default: 'top' },
  { name: 'stretch', description: 'whether width of tab automatically fits its container', type: 'boolean', value: '-', default: 'false' },
  {
    name: 'before-leave',
    description: 'hook function before switching tab. If `false` is returned or a `Promise` is returned and then is rejected, switching will be prevented',
    type: 'Function(activeName, oldActiveName)',
    value: '—',
    default: '—'
  }
]

export const events: DocumentEvent[] = [
  { name: 'tab-click', description: 'triggers when a tab is clicked', parameter: 'clicked tab' },
  { name: 'tab-remove', description: 'triggers when tab-remove button is clicked', parameter: 'name of the removed tab' },
  { name: 'tab-add', description: 'triggers when tab-add button is clicked', parameter: '—' },
  { name: 'edit', description: 'triggers when tab-add button or tab-remove is clicked', parameter: '(targetName, action)' }
]

export const document: ElDocument = { attributes, events }

export default document
