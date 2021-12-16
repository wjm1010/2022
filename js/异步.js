// promise.finally
Promise.prototype.finally = function (callback) {
  callback = typeof callback === "function" ? callback : function () {};
  let p = this.constructor;
  return this.then(
    (value) => p.resolve(callback()).then(() => value),
    (reason) =>
      p.resolve(callback()).then(() => {
        throw reason;
      })
  );
};

// Promise.all
function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new typeError("argmuent must be an array"));
    }
    let arr = [];
    let len = promises.length;
    for (let i = 0; i < len; i++) {
      promises[i].then((data) => {
        arr[i] = data;
        i++;
        if (i === promises.length) {
          resolve(arr);
        }
      }, reject);
    }
  });
}

// Promise.race
function promiseRace (promiseArr) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promiseArr)) {
      return reject('argmuents is not an array')
    }
    promiseArr.forEach(item => {
      Promise.resolve(item).then(resolve, reject)
    })
  })
}

// async await 原理
