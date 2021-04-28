import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'title',
    description: '标题',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'type',
    description: '主题',
    type: 'string',
    value: 'success/warning/info/error',
    default: 'info'
  },
  {
    name: 'description',
    description: '辅助性文字。也可通过默认 slot 传入',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'closable',
    description: '是否可关闭',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'center',
    description: '文字是否居中',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-text',
    description: '关闭按钮自定义文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-icon',
    description: '是否显示图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'effect',
    description: '选择提供的主题',
    type: 'string',
    value: 'light/dark',
    default: 'light'
  }
]

export const events: DocumentEvent[] = [{ name: 'close', description: '关闭alert时触发的事件', parameter: '—' }]

export const slots: DocumentSlot[] = [
  { name: '—', description: '描述' },
  { name: 'title', description: '标题的内容' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
