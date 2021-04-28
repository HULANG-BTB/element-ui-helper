import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentMethod } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'boolean / string / number',
    value: '—',
    default: '—'
  },
  {
    name: 'multiple',
    description: '是否多选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'disabled',
    description: '是否禁用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'value-key',
    description: '作为 value 唯一标识的键名，绑定值为对象类型时必填',
    type: 'string',
    value: '—',
    default: 'value'
  },
  {
    name: 'size',
    description: '输入框尺寸',
    type: 'string',
    value: 'medium/small/mini',
    default: '—'
  },
  {
    name: 'clearable',
    description: '是否可以清空选项',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'collapse-tags',
    description: '多选时是否将选中值按文字的形式展示',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'multiple-limit',
    description: '多选时用户最多可以选择的项目数，为 0 则不限制',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'name',
    description: 'select input 的 name 属性',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'autocomplete',
    description: 'select input 的 autocomplete 属性',
    type: 'string',
    value: '—',
    default: 'off'
  },
  {
    name: 'auto-complete',
    description: '下个主版本弃用',
    type: 'string',
    value: '—',
    default: 'off'
  },
  {
    name: 'placeholder',
    description: '占位符',
    type: 'string',
    value: '—',
    default: '请选择'
  },
  {
    name: 'filterable',
    description: '是否可搜索',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-create',
    description: '是否允许用户创建新条目，需配合 `filterable` 使用',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'filter-method',
    description: '自定义搜索方法',
    type: 'function',
    value: '—',
    default: '—'
  },
  {
    name: 'remote',
    description: '是否为远程搜索',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'remote-method',
    description: '远程搜索方法',
    type: 'function',
    value: '—',
    default: '—'
  },
  {
    name: 'loading',
    description: '是否正在从远程获取数据',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'loading-text',
    description: '远程加载时显示的文字',
    type: 'string',
    value: '—',
    default: '加载中'
  },
  {
    name: 'no-match-text',
    description: '搜索条件无匹配时显示的文字，也可以使用`slot="empty"`设置',
    type: 'string',
    value: '—',
    default: '无匹配数据'
  },
  {
    name: 'no-data-text',
    description: '选项为空时显示的文字，也可以使用`slot="empty"`设置',
    type: 'string',
    value: '—',
    default: '无数据'
  },
  {
    name: 'popper-class',
    description: 'Select 下拉框的类名',
    type: 'string',
    value: '—',
    default: '—'
  },
  {
    name: 'reserve-keyword',
    description: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'default-first-option',
    description: '在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用',
    type: 'boolean',
    value: '-',
    default: 'false'
  },
  {
    name: 'popper-append-to-body',
    description: '是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false',
    type: 'boolean',
    value: '-',
    default: 'true'
  },
  {
    name: 'automatic-dropdown',
    description: '对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单',
    type: 'boolean',
    value: '-',
    default: 'false'
  }
]

export const methods: DocumentMethod[] = [
  { name: 'focus', description: '使 input 获取焦点', parameter: '-' },
  {
    name: 'blur',
    description: '使 input 失去焦点，并隐藏下拉框',
    parameter: '-'
  }
]

export const events: DocumentEvent[] = [
  {
    name: 'change',
    description: '选中值发生变化时触发',
    parameter: '目前的选中值'
  },
  {
    name: 'visible-change',
    description: '下拉框出现/隐藏时触发',
    parameter: '出现则为 true，隐藏则为 false'
  },
  {
    name: 'remove-tag',
    description: '多选模式下移除tag时触发',
    parameter: '移除的tag值'
  },
  {
    name: 'clear',
    description: '可清空的单选模式下用户点击清空按钮时触发',
    parameter: '—'
  },
  {
    name: 'blur',
    description: '当 input 失去焦点时触发',
    parameter: '(event: Event)'
  },
  {
    name: 'focus',
    description: '当 input 获得焦点时触发',
    parameter: '(event: Event)'
  }
]

export const slots: DocumentSlot[] = [
  { name: '—', description: 'Option 组件列表' },
  { name: 'prefix', description: 'Select 组件头部内容' },
  { name: 'empty', description: '无选项时的列表' }
]

export const document: ElDocument = { attributes, methods, events, slots }

export default document
