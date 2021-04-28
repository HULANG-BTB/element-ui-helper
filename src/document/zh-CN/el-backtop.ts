import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'target',
    description: '触发滚动的对象',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'visibility-height',
    description: '滚动高度达到此参数值才出现',
    type: 'number',
    value: '',
    default: '200'
  },
  {
    name: 'right',
    description: '控制其显示位置, 距离页面右边距',
    type: 'number',
    value: '',
    default: '40'
  },
  {
    name: 'bottom',
    description: '控制其显示位置, 距离页面底部距离',
    type: 'number',
    value: '',
    default: '40'
  }
]

export const events: DocumentEvent[] = [{ name: 'click', description: '点击按钮触发的事件', parameter: '点击事件' }]

export const document: ElDocument = { attributes, events }

export default document
