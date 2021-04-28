import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'infinite-scroll-disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'infinite-scroll-delay',
    description: '节流时延，单位为ms',
    type: 'number',
    value: '-',
    default: '200'
  },
  {
    name: 'infinite-scroll-distance',
    description: '触发加载的距离阈值，单位为px',
    type: 'number',
    value: '-',
    default: '0'
  },
  {
    name: 'infinite-scroll-immediate',
    description: '是否立即执行加载方法，以防初始状态下内容无法撑满容器。',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const document: ElDocument = { attributes }

export default document
