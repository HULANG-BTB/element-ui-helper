import { ElDocument } from "typings/document";
import { DocumentMethod } from "typings/method";
import { DocumentSlot } from "typings/slot";

export const methods: DocumentMethod[] = [
  {
    name: "clearFiles",
    description: "清空已上传的文件列表（该方法不支持在 before-upload 中调用）",
    parameter: "—",
  },
  {
    name: "abort",
    description: "取消上传请求",
    parameter: "（ file: fileList 中的 file 对象 ）",
  },
  { name: "submit", description: "手动上传文件列表", parameter: "—" },
];

export const slots: DocumentSlot[] = [
  { name: "trigger", description: "触发文件选择框的内容" },
  { name: "tip", description: "提示说明文字" },
];

export const document: ElDocument = { methods, slots };

export default document;
