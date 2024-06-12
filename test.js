const sortArray = require('./main');

const testSortArray = () => {
  console.assert(
    JSON.stringify(sortArray([1, 5, 2, 3, 4])) ===
    JSON.stringify([1, 2, 4, 3, 5])
  )

  console.assert(
    JSON.stringify(sortArray([-2, -3, -4, -5, -6])) ===
    JSON.stringify([-4, -2, -6, -5, -3])
  )
  console.assert(
    JSON.stringify(sortArray([1, 0, 2, 3, 4])) ===
    JSON.stringify([0, 1, 2, 4, 3])
  )
  console.assert(JSON.stringify(sortArray([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(sortArray([2, 5, 77, 4, 5, 3, 5, 7, 2, 3, 4])) ===
    JSON.stringify([2, 2, 4, 4, 3, 3, 5, 5, 5, 7, 77])
  )
  console.assert(
    JSON.stringify(sortArray([3, 6, 44, 12, 32, 5])) ===
    JSON.stringify([32, 3, 5, 6, 12, 44])
  )
  console.assert(
    JSON.stringify(sortArray([2, 4, 8, 16, 32])) ===
    JSON.stringify([2, 4, 8, 16, 32])
  )
  console.assert(
    JSON.stringify(sortArray([2, 4, 8, 16, 32])) ===
    JSON.stringify([2, 4, 8, 16, 32])
  )
}

testSortArray()
