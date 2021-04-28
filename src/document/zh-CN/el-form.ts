import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'model',
    description: '表单数据对象',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'rules',
    description: '表单验证规则',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'inline',
    description: '行内表单模式',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'label-position',
    description: '表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`',
    type: 'string',
    value: 'right/left/top',
    default: 'right'
  },
  {
    name: 'label-width',
    description: "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。",
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label-suffix',
    description: '表单域标签的后缀',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'hide-required-asterisk',
    description: '是否显示必填字段的标签旁边的红色星号',
    type: 'boolean',
    value: '—',
    default: 'false'
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
    description: '是否以行内形式展示校验信息',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'status-icon',
    description: '是否在输入框中显示校验结果反馈图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'validate-on-rule-change',
    description: '是否在 `rules` 属性改变后立即触发一次验证',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'size',
    description: '用于控制该表单内组件的尺寸',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'disabled',
    description: '是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'validate',
    description: '对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise',
    parameter: 'Function(callback: Function(boolean, object))'
  },
  {
    name: 'validateField',
    description: '对部分表单字段进行校验的方法',
    parameter: 'Function(props: array \\'
  },
  {
    name: 'resetFields',
    description: '对整个表单进行重置，将所有字段值重置为初始值并移除校验结果',
    parameter: '—'
  },
  {
    name: 'clearValidate',
    description: '移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果',
    parameter: 'Function(props: array \\'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'validate',
    description: '任一表单项被校验后触发',
    parameter: '被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）'
  }
]

export const document: ElDocument = { attributes, methods, events }

export default document
