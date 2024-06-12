const countNums = require('./main');

const testCountNums = () => {
  console.assert(countNums([]) === 0)
  console.assert(countNums([-1, -2, 0]) === 0)
  console.assert(countNums([1, 1, 2, -2, 3, 4, 5]) === 6)
  console.assert(countNums([1, 6, 9, -6, 0, 1, 5]) === 5)
  console.assert(countNums([1, 100, 98, -7, 1, -1]) === 4)
  console.assert(countNums([12, 23, 34, -45, -56, 0]) === 5)
  console.assert(countNums([-0, 1 ** 0]) === 1)
  console.assert(countNums([1]) === 1)
}

testCountNums()
