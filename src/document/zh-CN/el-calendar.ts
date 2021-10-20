import { DocumentSlot, ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value/v-model',
    description: '绑定值',
    type: 'Date/string/number',
    value: '—',
    default: '—'
  },
  {
    name: 'range',
    description: '时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。',
    type: 'Array',
    value: '—',
    default: '—'
  },
  {
    name: 'first-day-of-week',
    description: '周起始日',
    type: 'Number',
    value: '1 到 7',
    default: 1
  }
]

export const slots: DocumentSlot[] = [
  {
    name: 'date',
    description: '单元格代表的日期'
  },
  {
    name: 'data',
    description: '{ type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd'
  }
]

export const document: ElDocument = { attributes, slots }

export default document
