import { ElDocument } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const scopedSlots: DocumentScopedSlot[] = [
  { name: 'date', description: 'date the cell represents' },
  {
    name: 'data',
    description:
      '{ type, isSelected, day}. The `type` property indicates which month the date belongs, optional values are `prev-month`, `current-month`, `next-month`. The `isSelected` property indicates whether the date is selected. The `day` property is the formatted date in the format yyyy-MM-dd'
  }
]

export const document: ElDocument = { scopedSlots }

export default document
