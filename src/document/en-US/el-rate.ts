import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'

export const attributes: DocumentAttribute[] = [
  { name: 'value / v-model', description: 'binding value', type: 'number', value: '—', default: '0' },
  { name: 'max', description: 'max rating score', type: 'number', value: '—', default: '5' },
  { name: 'disabled', description: 'whether Rate is read-only', type: 'boolean', value: '—', default: 'false' },
  { name: 'allow-half', description: 'whether picking half start is allowed', type: 'boolean', value: '—', default: 'false' },
  { name: 'low-threshold', description: 'threshold value between low and medium level. The value itself will be included in low level', type: 'number', value: '—', default: '2' },
  { name: 'high-threshold', description: 'threshold value between medium and high level. The value itself will be included in high level', type: 'number', value: '—', default: '4' },
  {
    name: 'colors',
    description:
      'colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color',
    type: 'array/object',
    value: '—',
    default: "['#F7BA2A', '#F7BA2A', '#F7BA2A']"
  },
  { name: 'void-color', description: 'color of unselected icons', type: 'string', value: '—', default: '#C6D1DE' },
  { name: 'disabled-void-color', description: 'color of unselected read-only icons', type: 'string', value: '—', default: '#EFF2F7' },
  {
    name: 'icon-classes',
    description:
      'class names of icons. If array, ot should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding icon class',
    type: 'array/object',
    value: '—',
    default: "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
  },
  { name: 'void-icon-class', description: 'class name of unselected icons', type: 'string', value: '—', default: 'el-icon-star-off' },
  { name: 'disabled-void-icon-class', description: 'class name of unselected read-only icons', type: 'string', value: '—', default: 'el-icon-star-on' },
  { name: 'show-text', description: 'whether to display texts', type: 'boolean', value: '—', default: 'false' },
  { name: 'show-score', description: 'whether to display current score. show-score and show-text cannot be true at the same time', type: 'boolean', value: '—', default: 'false' },
  { name: 'text-color', description: 'color of texts', type: 'string', value: '—', default: '#1F2D3D' },
  { name: 'texts', description: 'text array', type: 'array', value: '—', default: "['极差', '失望', '一般', '满意', '惊喜']" },
  { name: 'score-template', description: 'score template', type: 'string', value: '—', default: '{value}' }
]

export const events: DocumentEvent[] = [{ name: 'change', description: 'Triggers when rate value is changed', parameter: 'value after changing' }]

export const document: ElDocument = { attributes, events }

export default document
