import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'space',
    description: '每个 step 的间距，不填写将自适应间距。支持百分比。',
    type: 'number / string',
    value: '—',
    default: '—'
  },
  {
    name: 'direction',
    description: '显示方向',
    type: 'string',
    value: 'vertical/horizontal',
    default: 'horizontal'
  },
  {
    name: 'active',
    description: '设置当前激活步骤',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'process-status',
    description: '设置当前步骤的状态',
    type: 'string',
    value: 'wait / process / finish / error / success',
    default: 'process'
  },
  {
    name: 'finish-status',
    description: '设置结束步骤的状态',
    type: 'string',
    value: 'wait / process / finish / error / success',
    default: 'finish'
  },
  {
    name: 'align-center',
    description: '进行居中对齐',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'simple',
    description: '是否应用简洁风格',
    type: 'boolean',
    value: '-',
    default: 'false'
  }
]

export const document: ElDocument = { attributes }

export default document
