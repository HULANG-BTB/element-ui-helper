import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'type',
    description: '类型',
    type: 'string',
    value: 'text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)',
    default: 'text'
  },
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'maxlength',
    description: '原生属性，最大输入长度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'minlength',
    description: '原生属性，最小输入长度',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'show-word-limit',
    description: '是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'placeholder',
    description: '输入框占位文本',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可清空',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-password',
    description: '是否显示切换密码图标',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'size',
    description: '输入框尺寸，只在 `type!="textarea"` 时有效',
    type: 'string',
    value: 'medium / small / mini',
    default: '—'
  },
  {
    name: 'prefix-icon',
    description: '输入框头部图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'suffix-icon',
    description: '输入框尾部图标',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'rows',
    description: '输入框行数，只对 `type="textarea"` 有效',
    type: 'number',
    value: '—',
    default: '2'
  },
  {
    name: 'autosize',
    description: '自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
    type: 'boolean / object',
    value: '—',
    default: 'false'
  },
  {
    name: 'autocomplete',
    description: '原生属性，自动补全',
    type: 'string',
    value: 'on, off',
    default: 'off'
  },
  {
    name: 'auto-complete',
    description: '下个主版本弃用',
    type: 'string',
    value: 'on, off',
    default: 'off'
  },
  {
    name: 'name',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'readonly',
    description: '原生属性，是否只读',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'max',
    description: '原生属性，设置最大值',
    type: '—',
    value: '—',
    default: '—'
  },
  {
    name: 'min',
    description: '原生属性，设置最小值',
    type: '—',
    value: '—',
    default: '—'
  },
  {
    name: 'step',
    description: '原生属性，设置输入字段的合法数字间隔',
    type: '—',
    value: '—',
    default: '—'
  },
  {
    name: 'resize',
    description: '控制是否能被用户缩放',
    type: 'string',
    value: 'none, both, horizontal, vertical',
    default: '—'
  },
  {
    name: 'autofocus',
    description: '原生属性，自动获取焦点',
    type: 'boolean',
    value: 'true, false',
    default: 'false'
  },
  {
    name: 'form',
    description: '原生属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'label',
    description: '输入框关联的label文字',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'tabindex',
    description: '输入框的tabindex',
    type: 'string',
    value: '-',
    default: '-'
  },
  {
    name: 'validate-event',
    description: '输入时是否触发表单的校验',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '—' },
  { name: 'blur', description: '使 input 失去焦点', parameter: '—' },
  { name: 'select', description: '选中 input 中的文字', parameter: '—' }
]

export const events: DocumentEvent[] = [
  {
    name: 'blur',
    description: '在 Input 失去焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'focus',
    description: '在 Input 获得焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'change',
    description: '仅在输入框失去焦点或用户按下回车时触发',
    parameter: '(value: string \\'
  },
  {
    name: 'input',
    description: '在 Input 值改变时触发',
    parameter: '(value: string \\'
  },
  {
    name: 'clear',
    description: '在点击由 `clearable` 属性生成的清空按钮时触发',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: 'prefix', description: '输入框头部内容，只对 `type="text"` 有效' },
  { name: 'suffix', description: '输入框尾部内容，只对 `type="text"` 有效' },
  { name: 'prepend', description: '输入框前置内容，只对 `type="text"` 有效' },
  { name: 'append', description: '输入框后置内容，只对 `type="text"` 有效' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
