const belowZero = require('./main');

const testBelowZero = () => {
  console.assert(belowZero([]) === false)
  console.assert(belowZero([1, 2, -3, 1, 2, -3]) === false)
  console.assert(belowZero([1, 2, -4, 5, 6]) === true)
  console.assert(belowZero([1, -1, 2, -2, 5, -5, 4, -4]) === false)
  console.assert(belowZero([1, -1, 2, -2, 5, -5, 4, -5]) === true)
  console.assert(belowZero([1, -2, 2, -2, 5, -5, 4, -4]) === true)
}

testBelowZero()
