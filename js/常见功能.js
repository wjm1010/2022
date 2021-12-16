function test () {
  console.log('haha')
}
// 防抖
function debounce(fn, delay) {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout (() => {
      fn.call(this, arguments)
    }, delay)
  }
}

window.addEventListener('scroll', debounce(test, 100))

// 节流
function throttle (fn, deplay) {
  let last = 0
  return () => {
    const now = Date.now()
    if (now - last > deplay) {
      last = now
      fn.call(this, arguments)
    }
  }
}
window.addEventListener('scroll', throttle(test, 1000))

// 深拷贝
JSON.parse(JSON.stringify())

function deepClone (obj, cache = new WeakMap()) {
  if(Object.prototype.call.tostring(obj) !== '[object, object]') return obj
  if(cache.get(obj)) return cache.get(obj)
  let cloneObj = new obj.constructor()
  cache.set(obj,cloneObj)
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], cache)
    }
  }
  return cloneObj
}
const obj = {
  name: 'jack',
  address: { x: 1, y: 2 }
}
obj.a = obj
const newObj = deepClone (obj)
console.log(newObj.address === obj.address)

// 实现promise
class myPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = null // 成功或失败的参数
    this.resolveCallback = []
    this.rejectedCallback = []

    let self = this
    function resolve(value) {
      if(self.status === 'pending') {
        self.status = 'resolved'
        self.value = value
        self.resolveCallback.forEach(myfn => myfn(self, value))
      }
    }
    function reject(value) {
      if(self.status === 'pending') {
        self.status = 'rejected'
        self.value = value
        self.resolveCallback.forEach(myfn => myfn(self, value))
      }
    }

    try {
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    if(this.status = 'pending') {
      this.resolveCallback.push(() => {
        onFulfilled(this.value)
      })
      this.rejectedCallback.push(()=> {
        onRejected(this.value)
      })
    }
    if(this.status === 'resolved') {
      onFulfilled(this.value)
    }
    if(this.status === 'rejected') {
      onRejected(this.value)
    }
  }
}

function fn1() {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0) {
        resolve(1)
      } else {
        reject(2)
      }
    }, 1000)
  })
}

fn.then (
  res => console.log('res', res),
  err => console.log('err', err)
)

// 实现promise.finally
Promise.prototype.finally = function(callback) {
  callback = typeof callback === 'function' ? callback : function () {}
  let p = this.constructor
  return this.then(
    value => p.resolve(callback()).then(() => value),
    reason => p.resolve(callback()).then(() => { throw reason })
  )
}
// 实现Promise race
function PromiseRace (promises) {
  return new Promise((resolve,reject) => {
    if(!Array.isArray(promises)) {
      return reject('参数错误')
    }
    promises.forEach(item => {
      Promise.resolve(item).then(resolve, reject)
    })
  })
}
// 实现promise all
function promiseAll(promises) {
  return new Promise((resolve,reject) => {
    if(!Array.isArray(promises)) {
      return reject('参数错误')
    }
    let arr = []
    let len = promises.length
    for (let index = 0; index < len; index++) {
      promises[i].then(res => {
        arr[i] = res
        i++
        if(i === len) {
          resolve(arr)
        }
      }, reject)
    }
  })
}

// 异步控制并发数
function limitRequest(urls = [], limit = 3) {
 return new Promise((resolve,reject) => {
   let count = 0
   const len = urls.length

   const start = async() => {
    const url = urls.shift()
    if(url) {
      try {
        await axios.post(url)
        if (count = len - 1) {
          resolve()
        } else {
          count ++
          start()
        }
      } catch {
        if (count == len - 1) {
          resolve()
        } else {
          count++
          start()
        }
      }
    }
   }

   while(limit > 0) {
    start ()
    limit -=1
   }
 })
}
limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])

// 冒泡排序
arr.sort((a, b) => {
  return a-b
})
function bubblesort (arr) {
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        let num = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = num
      }
    }
  }
  return arr
}
// 去重
[...new set(arr)]
function resetArr(arr) {
  let res = []
  arr.forEach(item => {
    if(res.indexOf(item) !== -1) {
      res.push(item)
    }
  })
  return res
}

// 获取url参数
let params = new URLSearchParams(window.location.search)
let obj = Object.fromEntries(params.entries())

// 事件总线|发布订阅模式
class EventEmitter{
  constructor () {
    this.cache = {}
  }

  on(name, fn) {
    if(this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    const tasks = this.cache[name]
    if(tasks) {
      const index = tasks.findIndex(f=> f===fn || f.callback === fn)
      if(index>=0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name, once = false) {
    if(this.cache[name]) {
      const tasks = this.cache[name].slice()
      for(let fn of tasks) {
        fn()
      }
      if(once) {
        delete this.cache[name]
      }
    }
  }
}

const eventbus = new EventEmitter()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }

eventbus.on('task', task1)
eventbus.on('task', task2)
eventbus.off('task', task1)
setTimeout(() => {
  eventbus.emit('task') // task2
}, 1000)