import { ExtensionContext } from "vscode";
import * as vscode from "vscode";

import { hoverProvider } from "./hover-tips";

export function activate(context: ExtensionContext): void {
  console.log('extension "element-ui-helper" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "element-ui-helper.status",
    function () {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from element-ui!");
    }
  );

  // 注册hover提示
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(["vue"], hoverProvider)
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

export default {
  activate,
  deactivate,
};
