import { ElDocument } from "typings/document";
import { DocumentAttribute } from "typings/attribute";

export const attributes: DocumentAttribute[] = [
  {
    name: "width",
    description: "侧边栏宽度",
    type: "string",
    value: "—",
    default: "300px",
  },
];

export const document: ElDocument = { attributes };

export default document;
