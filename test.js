const fib4 = require('./main');

const testFib4 = () => {
  console.assert(fib4(5) === 4)
  console.assert(fib4(8) === 28)
  console.assert(fib4(10) === 104)
  console.assert(fib4(12) === 386)
}

testFib4()
