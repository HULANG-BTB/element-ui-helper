import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'to',
    description: '路由跳转对象，同 `vue-router` 的 `to`',
    type: 'string/object',
    value: '—',
    default: '—'
  },
  {
    name: 'replace',
    description: '在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const document: ElDocument = { attributes }

export default document
