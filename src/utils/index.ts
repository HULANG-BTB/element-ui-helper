/**
 * 驼峰转横线
 *
 * @param str 待转换的串
 */
export const toKebabCase = (str: string | undefined) => {
  if (str === undefined) {
    return ''
  }
  var temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 1) === '-') {
    //如果首字母是大写，执行replace时会多一个_，这里需要去掉
    temp = temp.slice(1)
  }
  return temp
}

export default { toKebabCase }
