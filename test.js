const belowThreshold = require('./main');

const testBelowThreshold = () => {
  console.assert(belowThreshold([1, 2, 4, 10], 100) === true)
  console.assert(belowThreshold([1, 20, 4, 10], 5) === false)
  console.assert(belowThreshold([1, 20, 4, 10], 21) === true)
  console.assert(belowThreshold([1, 20, 4, 10], 22) === true)
  console.assert(belowThreshold([1, 8, 4, 10], 11) === true)
  console.assert(belowThreshold([1, 8, 4, 10], 10) === false)
}

testBelowThreshold()
