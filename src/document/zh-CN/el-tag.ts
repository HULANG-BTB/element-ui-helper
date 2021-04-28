import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'success/info/warning/danger',
    default: '—'
  },
  {
    name: 'closable',
    description: '是否可关闭',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disable-transitions',
    description: '是否禁用渐变动画',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'hit',
    description: '是否有边框描边',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'color',
    description: '背景色',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'size',
    description: '尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'effect',
    description: '主题',
    type: 'string',
    value: 'dark / light / plain',
    default: 'light'
  }
]

export const events: DocumentEvent[] = [
  { name: 'click', description: '点击 Tag 时触发的事件', parameter: '—' },
  { name: 'close', description: '关闭 Tag 时触发的事件', parameter: '—' }
]

export const document: ElDocument = { attributes, events }

export default document
