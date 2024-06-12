const pairsSumToZero = require('./main');

const testPairsSumToZero = () => {
  console.assert(pairsSumToZero([1, 3, 5, 0]) === false)
  console.assert(pairsSumToZero([1, 3, -2, 1]) === false)
  console.assert(pairsSumToZero([1, 2, 3, 7]) === false)
  console.assert(pairsSumToZero([2, 4, -5, 3, 5, 7]) === true)
  console.assert(pairsSumToZero([1]) === false)
  console.assert(pairsSumToZero([-3, 9, -1, 3, 2, 30]) === true)
  console.assert(pairsSumToZero([-3, 9, -1, 3, 2, 31]) === true)
  console.assert(pairsSumToZero([-3, 9, -1, 4, 2, 30]) === false)
  console.assert(pairsSumToZero([-3, 9, -1, 4, 2, 31]) === false)
}

testPairsSumToZero()
