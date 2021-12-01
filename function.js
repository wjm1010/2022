// 模拟实现promise.finally
Promise.prototype.finally = function(callback) {
   callback = typeof callback=== 'function' ? callback: function () {};
   let p = this.constructor
   return this.then(
        value => p.resolve(callback()).then(()=>value),
        reason => p.resolve(callback()).then(()=>{throw error})
    )
}


// Promise.all 实现原理

function promiseAll(promise) {
    return new Promise(function(resolve, reject) {
        if(!Array.isArray(promise)) {
          return reject(new typeError('argmuent must be an array') )
        }
        let countNum = 0;
        let promiseNum = promise.length
        let resolvedvalue = new Array(promiseNum)
        for (let i = 0; i< promiseNum; i++) {
              (
                  function(i) {

                 }
              )(i)
         }
    })
}  
