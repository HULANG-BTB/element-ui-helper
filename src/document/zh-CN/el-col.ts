import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'span',
    description: '栅格占据的列数',
    type: 'number',
    value: '—',
    default: '24'
  },
  {
    name: 'offset',
    description: '栅格左侧的间隔格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'push',
    description: '栅格向右移动格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'pull',
    description: '栅格向左移动格数',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'xs',
    description: '`<768px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'sm',
    description: '`≥768px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'md',
    description: '`≥992px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'lg',
    description: '`≥1200px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'xl',
    description: '`≥1920px` 响应式栅格数或者栅格属性对象',
    type: 'number/object (例如： {span: 4, offset: 4})',
    value: '—',
    default: '—'
  },
  {
    name: 'tag',
    description: '自定义元素标签',
    type: 'string',
    value: '*',
    default: 'div'
  }
]

export const document: ElDocument = { attributes }

export default document
