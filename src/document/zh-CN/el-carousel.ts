import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'height',
    description: '走马灯的高度',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'initial-index',
    description: '初始状态激活的幻灯片的索引，从 0 开始',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'trigger',
    description: '指示器的触发方式',
    type: 'string',
    value: 'click',
    default: '—'
  },
  {
    name: 'autoplay',
    description: '是否自动切换',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'interval',
    description: '自动切换的时间间隔，单位为毫秒',
    type: 'number',
    value: '—',
    default: '3000'
  },
  {
    name: 'indicator-position',
    description: '指示器的位置',
    type: 'string',
    value: 'outside/none',
    default: '—'
  },
  {
    name: 'arrow',
    description: '切换箭头的显示时机',
    type: 'string',
    value: 'always/hover/never',
    default: 'hover'
  },
  {
    name: 'type',
    description: '走马灯的类型',
    type: 'string',
    value: 'card',
    default: '—'
  },
  {
    name: 'loop',
    description: '是否循环显示',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'direction',
    description: '走马灯展示的方向',
    type: 'string',
    value: 'horizontal/vertical',
    default: 'horizontal'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'setActiveItem',
    description: '手动切换幻灯片',
    parameter: '需要切换的幻灯片的索引，从 0 开始；或相应 `el-carousel-item` 的 `name` 属性值'
  },
  { name: 'prev', description: '切换至上一张幻灯片', parameter: '—' },
  { name: 'next', description: '切换至下一张幻灯片', parameter: '—' }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '幻灯片切换时触发',
    parameter: '目前激活的幻灯片的索引，原幻灯片的索引'
  }
]

export const document: ElDocument = { attributes, methods, events }

export default document
