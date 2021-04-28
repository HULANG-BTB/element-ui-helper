import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'space', description: 'the spacing of each step, will be responsive if omitted. Supports percentage.', type: 'number / string', value: '—', default: '—' },
  { name: 'direction', description: 'display direction', type: 'string', value: 'vertical/horizontal', default: 'horizontal' },
  { name: 'active', description: 'current activation step', type: 'number', value: '—', default: '0' },
  { name: 'process-status', description: 'status of current step', type: 'string', value: 'wait / process / finish / error / success', default: 'process' },
  { name: 'finish-status', description: 'status of end step', type: 'string', value: 'wait / process / finish / error / success', default: 'finish' },
  { name: 'align-center', description: 'center title and description', type: 'boolean', value: '—', default: 'false' },
  { name: 'simple', description: 'whether to apply simple theme', type: 'boolean', value: '-', default: 'false' }
]

export const document: ElDocument = { attributes }

export default document
