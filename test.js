const sumToN = require('./main');

const testSumToN = () => {
  console.assert(sumToN(1) === 1)
  console.assert(sumToN(6) === 21)
  console.assert(sumToN(11) === 66)
  console.assert(sumToN(30) === 465)
  console.assert(sumToN(100) === 5050)
}

testSumToN()
