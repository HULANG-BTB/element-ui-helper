import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'label',
    description: '选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）',
    type: 'string / number / boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'true-label',
    description: '选中时的值',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'false-label',
    description: '没有选中时的值',
    type: 'string / number',
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
    name: 'name',
    description: '原生 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'checked',
    description: '当前是否勾选',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const document: ElDocument = { attributes }

export default document
