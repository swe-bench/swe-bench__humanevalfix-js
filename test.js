const sortEven = require('./main');

const testSortEven = () => {
  console.assert(JSON.stringify(sortEven([1, 2, 3])) ===
    JSON.stringify([1, 2, 3]))
  console.assert(JSON.stringify(
    sortEven([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10])) ===
    JSON.stringify([-10, 3, -5, 2, -3, 3, 5, 0, 9, 1, 123]))
  console.assert(JSON.stringify(
    sortEven([5, 8, -12, 4, 23, 2, 3, 11, 12, -10])) ===
    JSON.stringify([-12, 8, 3, 4, 5, 2, 12, 11, 23, -10]))
}

testSortEven()
