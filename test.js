const fibfib = require('./main');

const testFibfib = () => {
  console.assert(fibfib(2) === 1)
  console.assert(fibfib(1) === 0)
  console.assert(fibfib(5) === 4)
  console.assert(fibfib(8) === 24)
  console.assert(fibfib(10) === 81)
  console.assert(fibfib(12) === 274)
  console.assert(fibfib(14) === 927)
}

testFibfib()
