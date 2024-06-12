const nextSmallest = require('./main');

const testNextSmallest = () => {
  console.assert(nextSmallest([1, 2, 3, 4, 5]) === 2)
  console.assert(nextSmallest([5, 1, 4, 3, 2]) === 2)
  console.assert(nextSmallest([]) === null)
  console.assert(nextSmallest([1, 1]) === null)
  console.assert(nextSmallest([1, 1, 1, 1, 0]) === 1)
  console.assert(nextSmallest([1, 0 ** 0]) === null)
  console.assert(nextSmallest([-35, 34, 12, -45]) === -35)
}

testNextSmallest()
