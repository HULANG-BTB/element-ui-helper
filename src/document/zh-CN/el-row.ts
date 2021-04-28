import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'gutter',
    description: '栅格间隔',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'type',
    description: '布局模式，可选 flex，现代浏览器下有效',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'justify',
    description: 'flex 布局下的水平排列方式',
    type: 'string',
    value: 'start/end/center/space-around/space-between',
    default: 'start'
  },
  {
    name: 'align',
    description: 'flex 布局下的垂直排列方式',
    type: 'string',
    value: 'top/middle/bottom',
    default: 'top'
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
