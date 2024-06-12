const median = require('./main');

const testMedian = () => {
  console.assert(median([3, 1, 2, 4, 5]) === 3)
  console.assert(median([-10, 4, 6, 1000, 10, 20]) === 8.0)
  console.assert(median([5]) === 5)
  console.assert(median([6, 5]) === 5.5)
  console.assert(median([8, 1, 3, 9, 9, 2, 7]) === 7)
}

testMedian()
