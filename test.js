const rollingMax = require('./main');

const testRollingMax = () => {
  console.assert(JSON.stringify(rollingMax([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(rollingMax([1, 2, 3, 4])) === JSON.stringify([1, 2, 3, 4])
  )
  console.assert(
    JSON.stringify(rollingMax([4, 3, 2, 1])) === JSON.stringify([4, 4, 4, 4])
  )
  console.assert(
    JSON.stringify(
      rollingMax([3, 2, 3, 100, 3])) === JSON.stringify([3, 3, 3, 100, 100])
  )
}

testRollingMax()
