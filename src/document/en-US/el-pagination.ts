import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'small', description: 'whether to use small pagination', type: 'boolean', value: '—', default: 'false' },
  { name: 'background', description: 'whether the buttons have a background color', type: 'boolean', value: '—', default: 'false' },
  { name: 'page-size', description: 'item count of each page, supports the .sync modifier', type: 'number', value: '—', default: '10' },
  { name: 'total', description: 'total item count', type: 'number', value: '—', default: '—' },
  {
    name: 'page-count',
    description: 'total page count. Set either `total` or `page-count` and pages will be displayed; if you need `page-sizes`, `total` is required',
    type: 'number',
    value: '—',
    default: '—'
  },
  { name: 'pager-count', description: 'number of pagers. Pagination collapses when the total page count exceeds this value', type: 'number', value: 'odd number between 5 and 21', default: '7' },
  { name: 'current-page', description: 'current page number, supports the .sync modifier', type: 'number', value: '—', default: '1' },
  {
    name: 'layout',
    description: 'layout of Pagination, elements separated with a comma',
    type: 'string',
    value: '`sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot`',
    default: "'prev, pager, next, jumper, ->, total'"
  },
  { name: 'page-sizes', description: 'options of item count per page', type: 'number[]', value: '—', default: '[10, 20, 30, 40, 50, 100]' },
  { name: 'popper-class', description: "custom class name for the page size Select's dropdown", type: 'string', value: '—', default: '—' },
  { name: 'prev-text', description: 'text for the prev button', type: 'string', value: '—', default: '—' },
  { name: 'next-text', description: 'text for the next button', type: 'string', value: '—', default: '—' },
  { name: 'disabled', description: 'whether Pagination is disabled', type: 'boolean', value: '—', default: 'false' },
  { name: 'hide-on-single-page', description: "whether to hide when there's only one page", type: 'boolean', value: '—', default: '-' }
]

export const events: DocumentEvent[] = [
  { name: 'size-change', description: 'triggers when `page-size` changes', parameter: 'the new page size' },
  { name: 'current-change', description: 'triggers when `current-page` changes', parameter: 'the new current page' },
  { name: 'prev-click', description: 'triggers when the prev button is clicked and current page changes', parameter: 'the new current page' },
  { name: 'next-click', description: 'triggers when the next button is clicked and current page changes', parameter: 'the new current page' }
]

export const slots: DocumentSlot[] = [{ name: '—', description: 'custom content. To use this, you need to declare `slot` in `layout`' }]

export const document: ElDocument = { attributes, events, slots }

export default document
