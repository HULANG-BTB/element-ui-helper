import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'small',
    description: '是否使用小型分页样式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'background',
    description: '是否为分页按钮添加背景色',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'page-size',
    description: '每页显示条目个数，支持 .sync 修饰符',
    type: 'number',
    value: '—',
    default: '10'
  },
  {
    name: 'total',
    description: '总条目数',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'page-count',
    description: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
    type: 'Number',
    value: '—',
    default: '—'
  },
  {
    name: 'pager-count',
    description: '页码按钮的数量，当总页数超过该值时会折叠',
    type: 'number',
    value: '大于等于 5 且小于等于 21 的奇数',
    default: '7'
  },
  {
    name: 'current-page',
    description: '当前页数，支持 .sync 修饰符',
    type: 'number',
    value: '—',
    default: '1'
  },
  {
    name: 'layout',
    description: '组件布局，子组件名用逗号分隔',
    type: 'String',
    value: '`sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot`',
    default: "'prev, pager, next, jumper, ->, total'"
  },
  {
    name: 'page-sizes',
    description: '每页显示个数选择器的选项设置',
    type: 'number[]',
    value: '—',
    default: '[10, 20, 30, 40, 50, 100]'
  },
  {
    name: 'popper-class',
    description: '每页显示个数选择器的下拉框类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'prev-text',
    description: '替代图标显示的上一页文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'next-text',
    description: '替代图标显示的下一页文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'hide-on-single-page',
    description: '只有一页时是否隐藏',
    type: 'boolean',
    value: '—',
    default: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'size-change',
    description: 'pageSize 改变时会触发',
    parameter: '每页条数'
  },
  {
    name: 'current-change',
    description: 'currentPage 改变时会触发',
    parameter: '当前页'
  },
  {
    name: 'prev-click',
    description: '用户点击上一页按钮改变当前页后触发',
    parameter: '当前页'
  },
  {
    name: 'next-click',
    description: '用户点击下一页按钮改变当前页后触发',
    parameter: '当前页'
  }
]

export const slots: DocumentSlot[] = [{ name: '—', description: '自定义内容，需要在 `layout` 中列出 `slot`' }]

export const document: ElDocument = { attributes, events, slots }

export default document
