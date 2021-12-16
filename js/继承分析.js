// 原型继承
function parent () {
  this.names = ['aaa']
}
function clild () {

}
clild.prototype = new parent()
let clild1 = new clild()
// 缺点 不能向parent传参，多个实例对引用类型会被修改

// call继承
function parent () {
  this.name = 'jack'
}
parent.prototype.getName=() => {}
function clild () {
  parent.call(this, 'anguments')
}
let clild1 = new clild()
// 可以传参，clild拿不到parent原型上的方法

// 组合继承
function parent () {
  this.name = 'jack'
}
parent.prototype.getName=()=>{}
function clild () {
  parent.call(this, 'anguments')
}
clild.prototype = new parent()
let clild1 = new clild()
// 可以传参，可以拿到原型上的方法，new clild（）的时候clild里面的parent方法执行一次，clild.prototype的时候有执行了一次

// 寄生继承
function createP (original) {
  var clone = Object.create(original)
  clone.getName = function () {
    console.log(this.name)
  }
  return clone
}
var parent = {name: 'jack'}
var clild = createP(parent)
// 不能向parent传参，多个实例对引用类型会被修改

// 寄生组合继承 - 完美解决方案
function parent () {
  this.names = ['jack']
}
parent.prototype.getName = () => {}
function child () {
  parent.call(this, anguments)
}
clild.prototype = Object.create(parent.prototype)
clild.prototype.fn = () => {}
let child1 = new child()

// call,apply,bind实现
Function.prototype.call = function (context,...arg) {
  context = context || window
  let fn = Symbol()
  context[fn] = this
  const res = context[fn](...arg)
  delete context[fn]
  return res
}
Function.prototype.apply = function (context,arg) {
  context = context || window
  arg = arg ? arg : []
  let fn = Symbol()
  context[fn] = this
  const res = context[fn](...arg)
  delete context[fn]
  return res
}

// new 的 实现原理
function _new() {
  let obj = {}
  let [constructor, ...args] = [...anguments]
  obj._proto_ = constructor.prototype
  let res = constructor.apply(obj, args)
  if(res && ['object', 'function'].includes(typeof (res))) {
    return res
  }
  return obj
}