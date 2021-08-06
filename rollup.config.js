/* eslint-disable */
import path from 'path'
import pkg from './package.json'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

const deps = Object.keys(pkg.dependencies || {})

export default [
  {
    input: path.resolve(__dirname, `./src/extension.ts`), //入口
    output: {
      format: 'cjs', // umd格式
      file: 'dist/extension.js', // 输出文件
      name: pkg.name // 指定name
    },
    sourcemap: true,
    plugins: [
      terser(),
      nodeResolve(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            sourceMap: true
          },
          include: ['src/**/*'],
          exclude: ['node_modules']
        },
        abortOnError: false
      })
    ], // 插件
    external(id) {
      return deps.some((k) => new RegExp('^' + k).test(id))
    }
  }
]
