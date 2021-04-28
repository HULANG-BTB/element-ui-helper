import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'value / v-model',
    description: '绑定值',
    type: 'number',
    value: '—',
    default: '0'
  },
  {
    name: 'max',
    description: '最大分值',
    type: 'number',
    value: '—',
    default: '5'
  },
  {
    name: 'disabled',
    description: '是否为只读',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'allow-half',
    description: '是否允许半选',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'low-threshold',
    description: '低分和中等分数的界限值，值本身被划分在低分中',
    type: 'number',
    value: '—',
    default: '2'
  },
  {
    name: 'high-threshold',
    description: '高分和中等分数的界限值，值本身被划分在高分中',
    type: 'number',
    value: '—',
    default: '4'
  },
  {
    name: 'colors',
    description: 'icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色',
    type: 'array/object',
    value: '—',
    default: "['#F7BA2A', '#F7BA2A', '#F7BA2A']"
  },
  {
    name: 'void-color',
    description: '未选中 icon 的颜色',
    type: 'string',
    value: '—',
    default: '#C6D1DE'
  },
  {
    name: 'disabled-void-color',
    description: '只读时未选中 icon 的颜色',
    type: 'string',
    value: '—',
    default: '#EFF2F7'
  },
  {
    name: 'icon-classes',
    description: 'icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名',
    type: 'array/object',
    value: '—',
    default: "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
  },
  {
    name: 'void-icon-class',
    description: '未选中 icon 的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-star-off'
  },
  {
    name: 'disabled-void-icon-class',
    description: '只读时未选中 icon 的类名',
    type: 'string',
    value: '—',
    default: 'el-icon-star-on'
  },
  {
    name: 'show-text',
    description: '是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'show-score',
    description: '是否显示当前分数，show-score 和 show-text 不能同时为真',
    type: 'boolean',
    value: '—',
    default: 'false'
  },
  {
    name: 'text-color',
    description: '辅助文字的颜色',
    type: 'string',
    value: '—',
    default: '#1F2D3D'
  },
  {
    name: 'texts',
    description: '辅助文字数组',
    type: 'array',
    value: '—',
    default: "['极差', '失望', '一般', '满意', '惊喜']"
  },
  {
    name: 'score-template',
    description: '分数显示模板',
    type: 'string',
    value: '—',
    default: '{value}'
  }
]

export const events: DocumentEvent[] = [{ name: 'change', description: '分值改变时触发', parameter: '改变后的分值' }]

export const document: ElDocument = { attributes, events }

export default document
