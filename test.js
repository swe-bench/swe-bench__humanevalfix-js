const triplesSumToZero = require('./main');

const testTriplesSumToZero = () => {
  console.assert(triplesSumToZero([1, 3, 5, 0]) === false)
  console.assert(triplesSumToZero([1, 3, 5, -1]) === false)
  console.assert(triplesSumToZero([1, 3, -2, 1]) === true)
  console.assert(triplesSumToZero([1, 2, 3, 7]) === false)
  console.assert(triplesSumToZero([1, 2, 5, 7]) === false)
  console.assert(triplesSumToZero([2, 4, -5, 3, 9, 7]) === true)
  console.assert(triplesSumToZero([1]) === false)
  console.assert(triplesSumToZero([1, 3, 5, -100]) === false)
  console.assert(triplesSumToZero([100, 3, 5, -100]) === false)
}

testTriplesSumToZero()
