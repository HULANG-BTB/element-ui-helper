import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'model', description: 'data of form component', type: 'object', value: '—', default: '—' },
  { name: 'rules', description: 'validation rules of form', type: 'object', value: '—', default: '—' },
  { name: 'inline', description: 'whether the form is inline', type: 'boolean', value: '—', default: 'false' },
  { name: 'label-position', description: "position of label. If set to 'left' or 'right', `label-width` prop is also required", type: 'string', value: 'left / right / top', default: 'right' },
  { name: 'label-width', description: "width of label, e.g. '50px'. All its direct child form items will inherit this value. Width `auto` is supported.", type: 'string', value: '—', default: '—' },
  { name: 'label-suffix', description: 'suffix of the label', type: 'string', value: '—', default: '—' },
  { name: 'hide-required-asterisk', description: 'whether required fields should have a red asterisk (star) beside their labels', type: 'boolean', value: '—', default: 'false' },
  { name: 'show-message', description: 'whether to show the error message', type: 'boolean', value: '—', default: 'true' },
  { name: 'inline-message', description: 'whether to display the error message inline with the form item', type: 'boolean', value: '—', default: 'false' },
  { name: 'status-icon', description: 'whether to display an icon indicating the validation result', type: 'boolean', value: '—', default: 'false' },
  { name: 'validate-on-rule-change', description: 'whether to trigger validation when the `rules` prop is changed', type: 'boolean', value: '—', default: 'true' },
  { name: 'size', description: 'control the size of components in this form', type: 'string', value: 'medium / small / mini', default: '—' },
  {
    name: 'disabled',
    description: "whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components' `disabled` prop",
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'validate',
    description:
      'validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted',
    parameter: 'Function(callback: Function(boolean, object))'
  },
  { name: 'validateField', description: 'validate one or several form items', parameter: 'Function(props: string \\' },
  { name: 'resetFields', description: 'reset all the fields and remove validation result', parameter: '—' },
  {
    name: 'clearValidate',
    description:
      "clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared",
    parameter: 'Function(props: string \\'
  }
]

export const events: DocumentEvent[] = [
  { name: 'validate', description: 'triggers after a form item is validated', parameter: 'prop name of the form item being validated, whether validation is passed and the error message if not' }
]

export const document: ElDocument = { attributes, methods, events }

export default document
