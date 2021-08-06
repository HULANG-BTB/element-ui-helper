import { ExtensionLanguage } from '../'
export interface DocumentAttribute {
  // 参数名称
  name: string
  // 说明
  description: string
  // 类型
  type: string
  // 可选值
  value: string
  // 默认值
  default: any
}

export interface DocumentEvent {
  // 事件名称
  name: string
  // 说明
  description: string
  // 参数
  parameter: string
}

export interface DocumentMethod {
  // 方法名称
  name: string
  // 说明
  description: string
  // 参数
  parameter: string
}

export interface DocumentSlot {
  // 插槽名称
  name: string
  // 说明
  description: string
}

export type DocumentScopedSlot = DocumentSlot

export interface ElDocument {
  attributes?: DocumentAttribute[]
  events?: DocumentEvent[]
  methods?: DocumentMethod[]
  scopedSlots?: DocumentScopedSlot[]
  slots?: DocumentSlot[]
}

export type LocalDocument = Record<string, Record<string, any>>

import CnDocument from './zh-CN'
import EnDocument from './en-US'

export const localDocument: LocalDocument = {
  [ExtensionLanguage.en]: EnDocument,
  [ExtensionLanguage.cn]: CnDocument
}
