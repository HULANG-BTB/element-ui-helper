import { DocumentAttribute } from '@/document'
import { ElDocument } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'action',
    description: '必选参数，上传的地址',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'headers',
    description: '设置上传的请求头部',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'multiple',
    description: '是否支持多选文件',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'data',
    description: '上传时附带的额外参数',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: '上传的文件字段名',
    type: 'string',
    value: '—',
    default: 'file'
  },
  {
    name: 'with-credentials',
    description: '支持发送 cookie 凭证信息',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-file-list',
    description: '是否显示已上传文件列表',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'drag',
    description: '是否启用拖拽上传',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'accept',
    description: '接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效）',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'on-preview',
    description: '点击文件列表中已上传的文件时的钩子',
    type: 'function(file)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-remove',
    description: '文件列表移除文件时的钩子',
    type: 'function(file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-success',
    description: '文件上传成功时的钩子',
    type: 'function(response, file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-error',
    description: '文件上传失败时的钩子',
    type: 'function(err, file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-progress',
    description: '文件上传时的钩子',
    type: 'function(event, file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-change',
    description: '文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用',
    type: 'function(file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'before-upload',
    description: '上传文件之前的钩子，参数为上传的文件，若返回 "false" 或者返回 Promise 且被 reject，则停止上传。',
    type: 'function(file)',
    value: '—',
    default: '—'
  },
  {
    name: 'before-remove',
    description: '删除文件之前的钩子，参数为上传的文件和文件列表，若返回 "false" 或者返回 Promise 且被 reject，则停止删除。',
    type: 'function(file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'list-type',
    description: '文件列表的类型',
    type: 'string',
    value: 'text/picture/picture-card',
    default: 'text'
  },
  {
    name: 'auto-upload',
    description: '是否在选取文件后立即进行上传',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'file-list',
    description: "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'http-request',
    description: '覆盖默认的上传行为，可以自定义上传的实现',
    type: 'function',
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
    name: 'limit',
    description: '最大允许上传个数',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'on-exceed',
    description: '文件超出个数限制时的钩子',
    type: 'function(files, fileList)',
    value: '—',
    default: '-'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'clearFiles',
    description: '清空已上传的文件列表（该方法不支持在 before-upload 中调用）',
    parameter: '—'
  },
  {
    name: 'abort',
    description: '取消上传请求',
    parameter: '（ file: fileList 中的 file 对象 ）'
  },
  { name: 'submit', description: '手动上传文件列表', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: 'trigger', description: '触发文件选择框的内容' },
  { name: 'tip', description: '提示说明文字' }
]

export const document: ElDocument = { attributes, methods, slots }

export default document
