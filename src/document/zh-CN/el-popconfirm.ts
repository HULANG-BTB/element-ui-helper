import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'confirm-button-text',
    description: '确认按钮文字',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'cancel-button-text',
    description: '取消按钮文字',
    type: 'String',
    value: '—',
    default: '—'
  },
  {
    name: 'confirm-button-type',
    description: '确认按钮类型',
    type: 'String',
    value: '—',
    default: 'Primary'
  },
  {
    name: 'cancel-button-type',
    description: '取消按钮类型',
    type: 'String',
    value: '—',
    default: 'Text'
  },
  {
    name: 'icon',
    description: 'Icon',
    type: 'String',
    value: '—',
    default: 'el-icon-question'
  },
  {
    name: 'icon-color',
    description: 'Icon 颜色',
    type: 'String',
    value: '—',
    default: '#f90'
  },
  {
    name: 'hide-icon',
    description: '是否隐藏 Icon',
    type: 'Boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  { name: 'confirm', description: '点击确认按钮时触发', parameter: '—' },
  { name: 'cancel', description: '点击取消按钮时触发', parameter: '—' }
]

export const slots: DocumentSlot[] = [{ name: 'reference', description: '触发 Popconfirm 显示的 HTML 元素' }]

export const document: ElDocument = { attributes, events, slots }

export default document
