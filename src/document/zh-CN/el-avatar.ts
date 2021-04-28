import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'icon',
    description: '设置头像的图标类型，参考 Icon 组件',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'size',
    description: '设置头像的大小',
    type: 'number/string',
    value: 'number / large / medium / small',
    default: 'large'
  },
  {
    name: 'shape',
    description: '设置头像的形状',
    type: 'string',
    value: 'circle / square',
    default: 'circle'
  },
  {
    name: 'src',
    description: '图片头像的资源地址',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'srcSet',
    description: '以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'alt',
    description: '描述图像的替换文本',
    type: 'string',
    value: '',
    default: ''
  },
  {
    name: 'fit',
    description: '当展示类型为图片的时候，设置图片如何适应容器框',
    type: 'string',
    value: 'fill / contain / cover / none / scale-down',
    default: 'cover'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'error',
    description: '图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为',
    parameter: '(e: Event)'
  }
]

export const slots: DocumentSlot[] = [{ name: 'default', description: '自定义头像展示内容' }]

export const document: ElDocument = { attributes, events, slots }

export default document
