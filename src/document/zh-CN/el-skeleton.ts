import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'animated',
    description: '是否使用动画',
    type: 'boolean',
    value: 'true,false',
    default: 'false'
  },
  {
    name: 'count',
    description: '渲染多少个 template, 建议使用尽可能小的数字',
    type: 'number',
    value: 'integer',
    default: '1'
  },
  {
    name: 'loading',
    description: '是否显示 skeleton 骨架屏',
    type: 'boolean',
    value: 'true,false',
    default: 'true'
  },
  {
    name: 'rows',
    description: '骨架屏段落数量',
    type: 'number',
    value: '正整数',
    default: '4'
  },
  {
    name: 'throttle',
    description: '延迟占位 DOM 渲染的时间, 单位是毫秒',
    type: 'number',
    value: '正整数',
    default: '0'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'default', description: '用来展示真实 UI' },
  { name: 'template', description: '用来展示自定义占位符' }
]

export const document: ElDocument = { attributes, slots }

export default document
