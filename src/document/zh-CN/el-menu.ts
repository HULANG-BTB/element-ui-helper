import { ElDocument } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'mode',
    description: '模式',
    type: 'string',
    value: 'horizontal / vertical',
    default: 'vertical'
  },
  {
    name: 'collapse',
    description: '是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'background-color',
    description: '菜单的背景色（仅支持 hex 格式）',
    type: 'string',
    value: '—',
    default: '#ffffff'
  },
  {
    name: 'text-color',
    description: '菜单的文字颜色（仅支持 hex 格式）',
    type: 'string',
    value: '—',
    default: '#303133'
  },
  {
    name: 'active-text-color',
    description: '当前激活菜单的文字颜色（仅支持 hex 格式）',
    type: 'string',
    value: '—',
    default: '#409EFF'
  },
  {
    name: 'default-active',
    description: '当前激活菜单的 index',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'default-openeds',
    description: '当前打开的 sub-menu 的 index 的数组',
    type: 'Array',
    value: '—',
    default: '—'
  },
  {
    name: 'unique-opened',
    description: '是否只保持一个子菜单的展开',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'menu-trigger',
    description: '子菜单打开的触发方式(只在 mode 为 horizontal 时有效)',
    type: 'string',
    value: 'hover / click',
    default: 'hover'
  },
  {
    name: 'router',
    description: '是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转',
    type: 'boolean',
    value: '—',
    default: false
  },
  {
    name: 'collapse-transition',
    description: '是否开启折叠动画',
    type: 'boolean',
    value: '—',
    default: true
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'open',
    description: '展开指定的 sub-menu',
    parameter: 'index: 需要打开的 sub-menu 的 index'
  },
  {
    name: 'close',
    description: '收起指定的 sub-menu',
    parameter: 'index: 需要收起的 sub-menu 的 index'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'select',
    description: '菜单激活回调',
    parameter: 'index: 选中菜单项的 index, indexPath: 选中菜单项的 index path'
  },
  {
    name: 'open',
    description: 'sub-menu 展开的回调',
    parameter: 'index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path'
  },
  {
    name: 'close',
    description: 'sub-menu 收起的回调',
    parameter: 'index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path'
  }
]

export const document: ElDocument = { methods, events, attributes }

export default document
