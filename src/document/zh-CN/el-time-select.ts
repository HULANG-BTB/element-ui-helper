import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'Select Option',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  {
    name: 'start',
    description: '开始时间',
    type: 'string',
    value: '—',
    default: '09:00'
  },
  {
    name: 'end',
    description: '结束时间',
    type: 'string',
    value: '—',
    default: '18:00'
  },
  {
    name: 'step',
    description: '间隔时间',
    type: 'string',
    value: '—',
    default: '00:30'
  },
  {
    name: 'minTime',
    description: '最小时间，小于该时间的时间段将被禁用',
    type: 'string',
    value: '—',
    default: '00:00'
  },
  {
    name: 'maxTime',
    description: '最大时间，大于该时间的时间段将被禁用',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'Picker Option',
    description: '-',
    type: '-',
    value: '-',
    default: '-'
  },
  {
    name: 'selectableRange',
    description: "可选时间段，例如`'18:30:00 - 20:30:00'`或者传入数组`['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']`",
    type: 'string / array',
    value: '—',
    default: '—'
  },
  {
    name: 'format',
    description: '时间格式化(TimePicker)',
    type: 'string',
    value: '小时：`HH`，分：`mm`，秒：`ss`，AM/PM `A`',
    default: "'HH:mm:ss'"
  }
]

export const document: ElDocument = { attributes }

export default document
