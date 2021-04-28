const fs = require('fs')
const path = require('path')
const readline = require('readline')
const os = require('os')

const build = (dir) => {
  const docs = fs.readdirSync(dir)
  docs.forEach((doc) => {
    if (/\.md$/.test(doc)) {
      const document = {}
      // const outName = doc.substr(0, doc.length - 3) + ".ts";
      const inStream = fs.createReadStream(path.resolve(dir, doc))
      // const outStream = fs.createWriteStream(path.resolve(__dirname, outName));
      const readLine = readline.createInterface(inStream)
      let skip = 0
      let flag = null
      let filename = ''
      readLine.on('line', (line) => {
        if (line.trim().length === 0) {
          // 跳过空行;
          return
        }
        if (skip) {
          --skip
          return
        }
        if (line.includes(':::') || line.includes('---')) {
          return
        }
        if (line.includes('Attributes')) {
          filename = 'el-' + line.replace(/#/g, '').replace('Attributes', '').trim().replace(/\ /g, '-').toLocaleLowerCase()
          if (filename.length === 3) {
            filename = 'el-' + doc.substr(0, doc.length - 3)
          }
          flag = 'attributes'
          skip = 2
          return
        }
        if (line.includes('Events') && line.includes('###')) {
          filename = 'el-' + line.replace(/#/g, '').replace('Events', '').trim().replace(/\ /g, '-').toLocaleLowerCase()
          if (filename.length === 3) {
            filename = 'el-' + doc.substr(0, doc.length - 3)
          }
          flag = 'events'
          skip = 2
          return
        }
        if (line.includes('Methods')) {
          filename = 'el-' + line.replace(/#/g, '').replace('Methods', '').trim().replace(/\ /g, '-').toLocaleLowerCase()
          if (filename.length === 3) {
            filename = 'el-' + doc.substr(0, doc.length - 3)
          }
          flag = 'methods'
          skip = 2
          return
        }
        if (line.includes('Scoped Slot')) {
          filename = 'el-' + line.replace(/#/g, '').replace('Scoped Slot', '').trim().replace(/\ /g, '-').toLocaleLowerCase()
          if (filename.length === 3) {
            filename = 'el-' + doc.substr(0, doc.length - 3)
          }
          flag = 'scopedSlots'
          skip = 2
          return
        }
        if (line.includes('Slot')) {
          filename = 'el-' + line.replace(/#/g, '').replace('Slots', '').replace('Slot', '').trim().replace(/\ /g, '-').toLocaleLowerCase()
          if (filename.length === 3) {
            filename = 'el-' + doc.substr(0, doc.length - 3)
          }
          flag = 'slots'
          skip = 2
          return
        }
        if (flag && filename) {
          arr = line
            .trim()
            .split('|')
            .map((item) => item.trim())
          if (document[filename] === undefined) {
            document[filename] = {}
          }
          if (document[filename][flag] === undefined) {
            document[filename][flag] = []
          }
          if (flag === 'attributes') {
            document[filename]['attributes'].push({
              name: arr[1],
              description: arr[2],
              type: arr[3],
              value: arr[4],
              default: arr[5]
            })
          }
          if (flag === 'events') {
            document[filename]['events'].push({
              name: arr[1],
              description: arr[2],
              parameter: arr[3]
            })
          }
          if (flag === 'methods') {
            document[filename]['methods'].push({
              name: arr[1],
              description: arr[2],
              parameter: arr[3]
            })
          }
          if (flag === 'scopedSlots') {
            document[filename]['scopedSlots'].push({
              name: arr[1],
              description: arr[2]
            })
          }
          if (flag === 'slots') {
            document[filename]['slots'].push({
              name: arr[1],
              description: arr[2]
            })
          }
        }
      })

      readLine.on('close', () => {
        Object.keys(document).forEach((key) => {
          const outStream = fs.createWriteStream(path.resolve(dir, key + '.ts'), { start: 0 })
          if (!outStream) {
            return
          }
          outStream.write(`import { ElDocument } from "@/document";` + os.EOL)
          if (document[key].attributes) {
            outStream.write(`import { DocumentAttribute } from "@/document";` + os.EOL)
          }
          if (document[key].methods) {
            outStream.write(`import { DocumentMethod } from "@/document";` + os.EOL)
          }
          if (document[key].events) {
            outStream.write(`import { DocumentEvent } from "@/document";` + os.EOL)
          }
          if (document[key].slots) {
            outStream.write(`import { DocumentSlot } from "@/document";` + os.EOL)
          }
          if (document[key].scopedSlots) {
            outStream.write(`import { DocumentScopedSlot } from "@/document";` + os.EOL)
          }

          if (document[key].attributes) {
            outStream.write(os.EOL + `export const attributes: DocumentAttribute[] = ` + JSON.stringify(document[key].attributes) + `;` + os.EOL)
          }
          if (document[key].methods) {
            outStream.write(os.EOL + `export const methods: DocumentMethod[] = ` + JSON.stringify(document[key].methods) + `;` + os.EOL)
          }
          if (document[key].events) {
            outStream.write(os.EOL + `export const events: DocumentEvent[] = ` + JSON.stringify(document[key].events) + `;` + os.EOL)
          }
          if (document[key].slots) {
            outStream.write(os.EOL + `export const slots: DocumentSlot[] = ` + JSON.stringify(document[key].slots) + `;` + os.EOL)
          }
          if (document[key].scopedSlots) {
            outStream.write(os.EOL + `export const scopedSlots: DocumentScopedSlot[] = ` + JSON.stringify(document[key].scopedSlots) + `;` + os.EOL)
          }

          // 写入尾部
          outStream.write(os.EOL + `export const document: ElDocument = {`)
          if (document[key].attributes) {
            outStream.write(`attributes,`)
          }
          if (document[key].methods) {
            outStream.write(`methods,`)
          }
          if (document[key].events) {
            outStream.write(`events,`)
          }
          if (document[key].slots) {
            outStream.write(`slots,`)
          }
          if (document[key].scopedSlots) {
            outStream.write(`scopedSlots,`)
          }
          outStream.write(`};` + os.EOL)

          outStream.write(os.EOL + `export default document;` + os.EOL)

          outStream.end(() => {
            try {
              fs.unlinkSync(path.resolve(dir, doc))
              console.log('unlink: ' + path.resolve(dir, doc))
              console.log('create: ' + path.resolve(dir, key + '.ts'))
            } catch (e) {
              e
            }
          })
        })
      })
    }
  })
}

const createIndex = (dir) => {
  const modules = fs.readdirSync(dir)
  const outStream = fs.createWriteStream(path.resolve(dir, 'index.ts'))

  const exportModules = []

  modules.forEach((filename) => {
    if (filename === 'index.ts') {
      return
    }
    const moduleFile = filename.substr(0, filename.length - 3)
    const moduleName = moduleFile.replace(/(-([a-z]))/g, '$2')
    if (/\.md$/.test(filename)) {
      fs.unlinkSync(path.resolve(dir, filename))
      console.log('unlink: ' + path.resolve(dir, filename))
    } else if (/\.ts$/.test(filename)) {
      outStream.write(`import ${moduleName} from './${moduleFile}';` + os.EOL)
      exportModules.push(`"${moduleFile}": ${moduleName}`)
    }
  })
  outStream.write(os.EOL + `export default { ${exportModules.join(',')} };` + os.EOL)
  console.log('create: index.ts')
}

const argv = process.argv
if (argv.length < 3) {
  console.log('Dir is must be input.')
} else {
  // console.log(path.resolve(__dirname, argv[2]));
  build(path.resolve(__dirname, argv[2]))
  createIndex(path.resolve(__dirname, argv[2]))
}
