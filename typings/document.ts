import { DocumentAttribute } from "./attribute";
import { DocumentEvent } from "./event";
import { DocumentMethod } from "./method";
import { DocumentScopedSlot } from "./scoped-slot";
import { DocumentSlot } from "./slot";

export interface ElDocument {
  attributes?: DocumentAttribute[];
  events?: DocumentEvent[];
  methods?: DocumentMethod[];
  scopedSlots?: DocumentScopedSlot[];
  slots?: DocumentSlot[];
}
