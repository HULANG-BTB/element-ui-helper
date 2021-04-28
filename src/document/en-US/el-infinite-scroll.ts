import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'infinite-scroll-disabled', description: 'is disabled', type: 'boolean', value: '-', default: 'false' },
  { name: 'infinite-scroll-delay', description: 'throttle delay (ms)', type: 'number', value: '-', default: '200' },
  { name: 'infinite-scroll-distance', description: 'trigger distance (px)', type: 'number', value: '-', default: '0' },
  {
    name: 'infinite-scroll-immediate',
    description: 'Whether to execute the loading method immediately, in case the content cannot be filled up in the initial state.',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const document: ElDocument = { attributes }

export default document
