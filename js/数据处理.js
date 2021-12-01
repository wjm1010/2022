// 模板字符串替换
export function render(template ,context) {
  return template.replace(/{{(.*?)}}/g, ($0, $1) => eval(`with(context){${$1}}`));
}
// 数组扁平化去重
export function flatten(arr) {
  return [ ...new Set(arr.toString().split(",").map(Number).sort((a, b) => a - b))]
}
export function flatten(arr) {
  return [...new Set(arr.flat(Infinity).sort((a, b) => a - b))]
}
export function flatten(arr) {
  return arr.reduce((prev,next) => {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}
export function flatten(arr) {
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}
export function flatten(arr) {
  while(arr.some(item => Array.isArray(item))){
    arr = [].concat.apply([], arr)
  }
  return arr
}
// Object.prototype.toString.call
// Array.isArray
// arr instanceof Array
// arr.constructor === Array
// Object.getPrototypeOf(arr) = Array.prototype
// 去重
export function uniqueArr(arr) {
  let newArr =  arr.filter((item,index) => arr.indexOf(item) === index)
  return newArr
}
export function uniqueArr(arr) {
  let newArr = []
  arr.forEach(item => !newArr.includes(item) ? newArr.push(item) : '')
  return newArr
}
export function uniqueArr(arr) {
  let newArr = arr.reduce((prev, cur) => {
    return prev.includes(cur) ? prev : [...prev, cur]
  }, [])
  return newArr
}
// 生成随机字符串
export function uuid(length = 8, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  let result = ''
  for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)]
  return result
}
// 对象转化为FORMDATA对象
export function getFormData(obj) {
  const formData = new FormData()
  Object.keys(obj).forEach(key => {
    const value = obj[key]
    Array.isArray(value) ?
      value.forEach((subvalue, i) => formData.append(key + `[${i}]`, subvalue))
    :
      formData.append(key, obj[key])
  })
  return formData
}
// 保留小数点以后N位
export function cutnumber(number, no = 2) {
  if(typeof number != 'number') number = Number(number)
  return Number(number.toFixed(no))
}