const largestDivisor = require('./main');

const testLargestDivisor = () => {
  console.assert(largestDivisor(3) === 1)
  console.assert(largestDivisor(7) === 1)
  console.assert(largestDivisor(10) === 5)
  console.assert(largestDivisor(100) === 50)
  console.assert(largestDivisor(49) === 7)
}

testLargestDivisor()
