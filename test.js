const add = require('./main');

const testAdd = () => {
  console.assert(add([4, 88]) === 88)
  console.assert(add([4, 5, 6, 7, 2, 122]) === 122)
  console.assert(add([4, 0, 6, 7]) === 0)
  console.assert(add([4, 4, 6, 8]) === 12)
}

testAdd()
