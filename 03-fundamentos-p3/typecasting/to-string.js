console.log(String(true));
console.log(String(100));
console.log(String(undefined));
console.log(String(NaN));
console.log(String({a: 10, b: 100}))

const objStr = JSON.stringify({a: 10, b: 100})
console.log(objStr)