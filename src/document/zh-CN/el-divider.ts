import { ElDocument } from "typings/document";
import { DocumentAttribute } from "typings/attribute";

export const attributes: DocumentAttribute[] = [
  {
    name: "direction",
    description: "设置分割线方向",
    type: "string",
    value: "horizontal / vertical",
    default: "horizontal",
  },
  {
    name: "content-position",
    description: "设置分割线文案的位置",
    type: "string",
    value: "left / right / center",
    default: "center",
  },
];

export const document: ElDocument = { attributes };

export default document;
