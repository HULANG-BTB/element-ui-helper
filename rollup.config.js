/* eslint-disable */
import fs from "fs";
import path from "path";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}

delDir(path.resolve(__dirname, "dist"));

const deps = Object.keys(pkg.dependencies || {});

export default [
  {
    input: path.resolve(__dirname, "./src/extension.ts"), //入口
    output: {
      format: "cjs", // umd格式
      file: "dist/src/extension.js", // 输出文件
      name: pkg.name, // 指定name
    },
    plugins: [
      terser(),
      nodeResolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: "ESNext",
            declaration: false,
          },
          exclude: ["node_modules"],
        },
        abortOnError: false,
      }),
    ], // 插件
    external(id) {
      return deps.some((k) => new RegExp("^" + k).test(id));
    },
  },
];
