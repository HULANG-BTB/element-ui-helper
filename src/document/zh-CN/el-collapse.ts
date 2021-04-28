import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`)',
    type: 'string / array',
    value: '—',
    default: '—'
  },
  {
    name: 'accordion',
    description: '是否手风琴模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames` 类型为`string`，否则为`array`)',
    parameter: '(activeNames: array / string)'
  }
]

export const document: ElDocument = { attributes, events }

export default document
