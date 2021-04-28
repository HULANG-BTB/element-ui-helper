import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentSlot } from '@/document'
import { DocumentScopedSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'prop',
    description: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的',
    type: 'string',
    value: '传入 Form 组件的 `model` 中的字段',
    default: '—'
  },
  {
    name: 'label',
    description: '标签文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label-width',
    description: "表单域标签的的宽度，例如 '50px'。支持 `auto`。",
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'required',
    description: '是否必填，如不设置，则会根据校验规则自动生成',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'rules',
    description: '表单验证规则',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'error',
    description: '表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'show-message',
    description: '是否显示校验错误信息',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'inline-message',
    description: '以行内形式展示校验信息',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '用于控制该表单域下组件的尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'resetField',
    description: '对该表单项进行重置，将其值重置为初始值并移除校验结果',
    parameter: '-'
  },
  {
    name: 'clearValidate',
    description: '移除该表单项的校验结果',
    parameter: '-'
  }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Form Item 的内容' },
  { name: 'label', description: '标签文本的内容' }
]

export const scopedSlots: DocumentScopedSlot[] = [
  {
    name: 'error',
    description: '自定义表单校验信息的显示方式，参数为 { error }'
  }
]

export const document: ElDocument = { attributes, methods, slots, scopedSlots }

export default document
