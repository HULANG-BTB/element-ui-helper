import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'Select Option', description: '-', type: '-', value: '-', default: '-' },
  { name: 'start', description: 'start time', type: 'string', value: '—', default: '09:00' },
  { name: 'end', description: 'end time', type: 'string', value: '—', default: '18:00' },
  { name: 'step', description: 'time step', type: 'string', value: '—', default: '00:30' },
  { name: 'minTime', description: 'minimum time, any time before this time will be disabled', type: 'string', value: '—', default: '00:00' },
  { name: 'maxTime', description: 'maximum time, any time after this time will be disabled', type: 'string', value: '—', default: '—' },
  { name: 'Picker Option', description: '-', type: '-', value: '-', default: '-' },
  { name: 'selectableRange', description: "available time range, e.g.`'18:30:00 - 20:30:00'`or`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']`", type: 'string / array', value: '—', default: '—' },
  { name: 'format', description: 'format of the picker', type: 'string', value: 'hour `HH`, minute `mm`, second `ss`, AM/PM `A`', default: 'HH:mm:ss' }
]

export const document: ElDocument = { attributes }

export default document
