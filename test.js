const sortArray = require('./main');

const testSortArray = () => {
  console.assert(JSON.stringify(sortArray([])) === JSON.stringify([]))
  console.assert(JSON.stringify(sortArray([5])) === JSON.stringify([5]))
  console.assert(JSON.stringify(sortArray([2, 4, 3, 0, 1, 5])) === JSON.stringify([0, 1, 2, 3, 4, 5]))
  console.assert(JSON.stringify(sortArray([2, 4, 3, 0, 1, 5, 6])) === JSON.stringify([6, 5, 4, 3, 2, 1, 0]))
  console.assert(JSON.stringify(sortArray([2, 1])) === JSON.stringify([1, 2]))
  console.assert(JSON.stringify(sortArray([15, 42, 87, 32, 11, 0])) === JSON.stringify([0, 11, 15, 32, 42, 87]))
  console.assert(JSON.stringify(sortArray([21, 14, 23, 11])) === JSON.stringify([23, 21, 14, 11]))
}

testSortArray()
