const multiply = require('./main');

const testMultiply = () => {
  console.assert(multiply(148, 412) === 16)
  console.assert(multiply(19, 28) === 72)
  console.assert(multiply(2020, 1851) === 0)
  console.assert(multiply(14, -15) === 20)
  console.assert(multiply(76, 67) === 42)
  console.assert(multiply(17, 27) === 49)
  console.assert(multiply(0, 1) === 0)
  console.assert(multiply(0, 0) === 0)
}

testMultiply()
