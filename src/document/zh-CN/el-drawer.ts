import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'append-to-body',
    description: 'Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'before-close',
    description: '关闭前的回调，会暂停 Drawer 的关闭',
    type: 'function(done)，done 用于关闭 Drawer',
    value: '—',
    default: '—'
  },
  {
    name: 'close-on-press-escape',
    description: '是否可以通过按下 ESC 关闭 Drawer',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'custom-class',
    description: 'Drawer 的自定义类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'destroy-on-close',
    description: '控制是否在关闭 Drawer 之后将子元素全部销毁',
    type: 'boolean',
    value: '-',
    default: 'false'
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
    description: '遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'direction',
    description: 'Drawer 打开的方向',
    type: 'Direction',
    value: 'rtl / ltr / ttb / btt',
    default: 'rtl'
  },
  {
    name: 'show-close',
    description: '是否显示关闭按钮',
    type: 'boolean',
    value: '—',
    default: 'true'
  },
  {
    name: 'size',
    description: "Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释",
    type: 'number / string',
    value: '-',
    default: "'30%'"
  },
  {
    name: 'title',
    description: 'Drawer 的标题，也可通过具名 slot （见下表）传入',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'visible',
    description: '是否显示 Drawer，支持 .sync 修饰符',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'wrapperClosable',
    description: '点击遮罩层是否可以关闭 Drawer',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'withHeader',
    description: '控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效',
    type: 'boolean',
    value: '-',
    default: 'true'
  }
]

export const methods: DocumentMethod[] = [
  {
    name: 'closeDrawer',
    description: '用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法',
    parameter: ''
  }
]

export const events: DocumentEvent[] = [
  { name: 'open', description: 'Drawer 打开的回调', parameter: '—' },
  {
    name: 'opened',
    description: 'Drawer 打开动画结束时的回调',
    parameter: '—'
  },
  { name: 'close', description: 'Drawer 关闭的回调', parameter: '—' },
  {
    name: 'closed',
    description: 'Drawer 关闭动画结束时的回调',
    parameter: '—'
  }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Drawer 的内容' },
  { name: 'title', description: 'Drawer 标题区的内容' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
