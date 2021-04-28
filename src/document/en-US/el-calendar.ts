import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'Date/string/number', value: '—', default: '—' },
  {
    name: 'range',
    description: 'time range, including start time and end time. Start time must be start day of week, end time must be end day of week, the time span cannot exceed two months.',
    type: 'Array',
    value: '—',
    default: '—'
  },
  { name: 'first-day-of-week', description: 'fisrt day of week', type: 'Number', value: '1 to 7', default: '1' }
]

export const document: ElDocument = { attributes }

export default document
