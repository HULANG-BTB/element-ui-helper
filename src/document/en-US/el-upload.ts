import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'action',
    description: 'required, request URL',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'headers',
    description: 'request headers',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'multiple',
    description: 'whether uploading multiple files is permitted',
    type: 'boolean',
    value: '—',
    default: '—'
  },
  {
    name: 'data',
    description: 'additions options of request',
    type: 'object',
    value: '—',
    default: '—'
  },
  {
    name: 'name',
    description: 'key name for uploaded file',
    type: 'string',
    value: '—',
    default: 'file'
  },
  {
    name: 'with-credentials',
    description: 'whether cookies are sent',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-file-list',
    description: 'whether to show the uploaded file list',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'drag',
    description: 'whether to activate drag and drop mode',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'accept',
    description: 'accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode` is `"true"`',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'on-preview',
    description: 'hook function when clicking the uploaded files',
    type: 'function(file)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-remove',
    description: 'hook function when files are removed',
    type: 'function(file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-success',
    description: 'hook function when uploaded successfully',
    type: 'function(response, file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-error',
    description: 'hook function when some errors occurs',
    type: 'function(err, file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-progress',
    description: 'hook function when some progress occurs',
    type: 'function(event, file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'on-change',
    description: 'hook function when select file or upload file success or upload file fail',
    type: 'function(file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'before-upload',
    description: 'hook function before uploading with the file to be uploaded as its parameter. If `"false"` is returned or a `Promise` is returned and then is rejected, uploading will be aborted',
    type: 'function(file)',
    value: '—',
    default: '—'
  },
  {
    name: 'before-remove',
    description:
      'hook function before removing a file with the file and file list as its parameters. If `"false"` is returned or a `Promise` is returned and then is rejected, removing will be aborted.',
    type: 'function(file, fileList)',
    value: '—',
    default: '—'
  },
  {
    name: 'thumbnail-mode',
    description: 'whether thumbnail is displayed',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'file-list',
    description: "default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
    type: 'array',
    value: '—',
    default: '[]'
  },
  {
    name: 'list-type',
    description: 'type of fileList',
    type: 'string',
    value: 'text/picture/picture-card',
    default: 'text'
  },
  {
    name: 'auto-upload',
    description: 'whether to auto upload file',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'http-request',
    description: "override default xhr behavior, allowing you to implement your own upload-file's request",
    type: 'function',
    value: '—',
    default: '—'
  },
  {
    name: 'disabled',
    description: 'whether to disable upload',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'limit',
    description: 'maximum number of uploads allowed',
    type: 'number',
    value: '—',
    default: '—'
  },
  {
    name: 'on-exceed',
    description: 'hook function when limit is exceeded',
    type: 'function(files, fileList)',
    value: '—',
    default: '-'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'clearFiles', description: 'clear the uploaded file list (this method is not supported in the `before-upload` hook)', parameter: '—' },
  { name: 'abort', description: 'cancel upload request', parameter: "（ file: fileList's item ）" },
  { name: 'submit', description: 'upload the file list manually', parameter: '—' }
]

export const slots: DocumentSlot[] = [
  { name: 'trigger', description: 'content which triggers file dialog' },
  { name: 'tip', description: 'content of tips' }
]

export const document: ElDocument = { attributes, methods, slots }

export default document
