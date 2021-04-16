import { DocumentAttribute } from "typings/attribute";
import { ElDocument } from "typings/document";
import { DocumentMethod } from "typings/method";
import { DocumentScopedSlot } from "typings/scoped-slot";
import { DocumentSlot } from "typings/slot";
import { MarkdownString } from "vscode";

export const generator = {
  attributes: (
    document: ElDocument,
    tag: string,
    attribute: string | null
  ): MarkdownString => {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const attributes = document.attributes || [];
    if (attributes.length) {
      markdownString.appendMarkdown(`### ${tag} 属性 \r`);
      markdownString.appendMarkdown(
        "| 属性 | 说明 | 类型 | 可选值 | 默认值 |\r"
      );
      markdownString.appendMarkdown("|---|---|:-:|---|:-:|\r");
    }
    if (attribute === null) {
      // 属性 和标签一样 显示全部
      attributes.forEach((row: DocumentAttribute) => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = attributes.find(
        (row: DocumentAttribute) => row.name === attribute
      );
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.type}|${row.value}|${row.default}|\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  },
  methods: (
    document: ElDocument,
    tag: string,
    attribute: string | null
  ): MarkdownString => {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const methods = document.methods || [];
    if (methods.length) {
      markdownString.appendMarkdown(`### ${tag} 方法\r`);
      markdownString.appendMarkdown("| 方法 | 说明 | 参数 |\r");
      markdownString.appendMarkdown("|---|---|:-:|\r");
    }
    if (attribute === null) {
      // 属性 和标签一样 显示全部
      methods.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = methods.find((row: DocumentMethod) => row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  },
  events: (
    document: ElDocument,
    tag: string,
    attribute: string | null
  ): MarkdownString => {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const events = document.events || [];
    if (events.length) {
      markdownString.appendMarkdown(`### ${tag} 事件\r`);
      markdownString.appendMarkdown("| 事件 | 说明 | 参数 |\r");
      markdownString.appendMarkdown("|---|---|:-:|\r");
    }
    if (attribute === null) {
      // 属性 和标签一样 显示全部
      events.forEach((row: DocumentMethod) => {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = events.find((row: DocumentMethod) => row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(
          `|${row.name}|${row.description}|${row.parameter}|\r`
        );
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  },
  slots: (
    document: ElDocument,
    tag: string,
    attribute: string | null
  ): MarkdownString => {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const slots = document.slots || [];
    if (slots.length) {
      markdownString.appendMarkdown(`### ${tag} 插槽\r`);
      markdownString.appendMarkdown("| 插槽 | 说明 |\r");
      markdownString.appendMarkdown("|---|---|\r");
    }
    if (attribute === null) {
      // 属性 和标签一样 显示全部
      slots.forEach((row: DocumentSlot) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = slots.find((row: DocumentSlot) => row.name === attribute);
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  },
  scopedSlots: (
    document: ElDocument,
    tag: string,
    attribute: string | null
  ): MarkdownString => {
    let isUndefined: boolean = true; // 标记是否具有文档
    let markdownString: MarkdownString = new MarkdownString("", true);
    const scopedSlots = document.scopedSlots || [];
    if (scopedSlots.length) {
      markdownString.appendMarkdown(`### ${tag} 插槽\r`);
      markdownString.appendMarkdown("| 插槽 | 说明 |\r");
      markdownString.appendMarkdown("|---|---|\r");
    }
    if (attribute === null) {
      // 属性 和标签一样 显示全部
      scopedSlots.forEach((row: DocumentScopedSlot) => {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      });
    } else {
      // 属性和标签不一样 显示标签下的某个属性的信息
      const row = scopedSlots.find(
        (row: DocumentScopedSlot) => row.name === attribute
      );
      if (row) {
        markdownString.appendMarkdown(`|${row.name}|${row.description}|\r`);
        isUndefined = false;
      }
    }
    if (isUndefined) {
      markdownString = new MarkdownString("", true);
    }
    return markdownString;
  },
};

export default { generator };
