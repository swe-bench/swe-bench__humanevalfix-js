const fib = require('./main');

const testFib = () => {
  console.assert(fib(10) === 55)
  console.assert(fib(1) === 1)
  console.assert(fib(8) === 21)
  console.assert(fib(11) === 89)
  console.assert(fib(12) === 144)
}

testFib()
