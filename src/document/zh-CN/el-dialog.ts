import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'visible',
    description: '是否显示 Dialog，支持 .sync 修饰符',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'title',
    description: 'Dialog 的标题，也可通过具名 slot （见下表）传入',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'width',
    description: 'Dialog 的宽度',
    type: 'string',
    value: '—',
    default: '50%'
  },
  {
    name: 'fullscreen',
    description: '是否为全屏 Dialog',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'top',
    description: 'Dialog CSS 中的 margin-top 值',
    type: 'string',
    value: '—',
    default: '15vh'
  },
  {
    name: 'modal',
    description: '是否需要遮罩层',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'modal-append-to-body',
    description: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'append-to-body',
    description: 'Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'lock-scroll',
    description: '是否在 Dialog 出现时将 body 滚动锁定',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'custom-class',
    description: 'Dialog 的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'close-on-click-modal',
    description: '是否可以通过点击 modal 关闭 Dialog',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Dialog',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'show-close',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'before-close',
    description: '关闭前的回调，会暂停 Dialog 的关闭',
    type: 'function(done)，done 用于关闭 Dialog',
    value: '—',
    default: '—'
  },
  {
    name: 'center',
    description: '是否对头部和底部采用居中布局',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'destroy-on-close',
    description: '关闭时销毁 Dialog 中的元素',
    type: 'boolean',
    value: '—',
    default: 'false'
  }
]

export const events: DocumentEvent[] = [
  { name: 'open', description: 'Dialog 打开的回调', parameter: '—' },
  {
    name: 'opened',
    description: 'Dialog 打开动画结束时的回调',
    parameter: '—'
  },
  { name: 'close', description: 'Dialog 关闭的回调', parameter: '—' },
  {
    name: 'closed',
    description: 'Dialog 关闭动画结束时的回调',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Dialog 的内容' },
  { name: 'title', description: 'Dialog 标题区的内容' },
  { name: 'footer', description: 'Dialog 按钮操作区的内容' }
]

export const document: ElDocument = { attributes, events, slots }

export default document
