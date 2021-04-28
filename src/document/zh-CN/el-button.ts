import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'primary / success / warning / danger / info / text',
    default: '—'
  },
  {
    name: 'plain',
    description: '是否朴素按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'round',
    description: '是否圆角按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'circle',
    description: '是否圆形按钮',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading',
    description: '是否加载中状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用状态',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'icon',
    description: '图标类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'autofocus',
    description: '是否默认聚焦',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'native-type',
    description: '原生 type 属性',
    type: 'string',
    value: 'button / submit / reset',
    default: 'button'
  }
]

export const document: ElDocument = { attributes }

export default document
