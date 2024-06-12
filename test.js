const largestPrimeFactor = require('./main');

const testLargestPrimeFactor = () => {
  console.assert(largestPrimeFactor(15) === 5)
  console.assert(largestPrimeFactor(27) === 3)
  console.assert(largestPrimeFactor(63) === 7)
  console.assert(largestPrimeFactor(330) === 11)
  console.assert(largestPrimeFactor(13195) === 29)
}

testLargestPrimeFactor()
