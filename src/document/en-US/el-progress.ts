import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: '**percentage**', description: 'percentage, **required**', type: 'number', value: '0-100', default: '0' },
  { name: 'type', description: 'the type of progress bar', type: 'string', value: 'line/circle/dashboard', default: 'line' },
  { name: 'stroke-width', description: 'the width of progress bar', type: 'number', value: '—', default: '6' },
  { name: 'text-inside', description: "whether to place the percentage inside progress bar, only works when `type` is 'line'", type: 'boolean', value: '—', default: 'false' },
  { name: 'status', description: 'the current status of progress bar', type: 'string', value: 'success/exception/warning', default: '—' },
  { name: 'color', description: 'background color of progress bar. Overrides `status` prop', type: 'string/function/array', value: '—', default: "''" },
  { name: 'width', description: 'the canvas width of circle progress bar', type: 'number', value: '—', default: '126' },
  { name: 'show-text', description: 'whether to show percentage', type: 'boolean', value: '—', default: 'true' },
  { name: 'stroke-linecap', description: 'circle/dashboard type shape at the end path', type: 'string', value: 'butt/round/square', default: 'round' },
  { name: 'format', description: 'custom text format', type: 'function(percentage)', value: '—', default: '—' }
]

export const document: ElDocument = { attributes }

export default document
