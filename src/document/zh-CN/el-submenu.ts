import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'

const attributes: DocumentAttribute[] = [
  {
    name: 'index',
    description: '唯一标志',
    type: 'string/null',
    value: '—',
    default: null
  },
  {
    name: 'popper-class',
    description: '弹出菜单的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-timeout',
    description: '展开 sub-menu 的延时',
    type: 'number',
    value: '—',
    default: 300
  },
  {
    name: 'hide-timeout',
    description: '收起 sub-menu 的延时',
    type: 'number',
    value: '—',
    default: 300
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'popper-append-to-body',
    description: '是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性',
    type: 'boolean',
    value: '—',
    default: '一级子菜单：true / 非一级子菜单：false'
  }
]

export const document: ElDocument = { attributes }

export default document
