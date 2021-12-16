const a = {}
const b = {key: 123}
const c = {key: 123}
a[b] = 'b'
a[c] = 'c'
console.log(a[b])

const a = {}
const b = Symbol(123)
const c = Symbol(123)
a[b] = 'b'
a[c] = 'c'
console.log(a[b])