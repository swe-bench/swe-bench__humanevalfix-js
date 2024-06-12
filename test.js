const orderByPoints = require('./main');

const testOrderByPoints = () => {
  console.assert(
    JSON.stringify(orderByPoints([1, 11, -1, -11, -12])) ===
    JSON.stringify([-1, -11, 1, -12, 11])
  )
  console.assert(
    JSON.stringify(
      orderByPoints([
        1234, 423, 463, 145, 2, 423, 423, 53, 6, 37, 3457, 3, 56, 0, 46,
      ])
    ) ===
    JSON.stringify([
      0, 2, 3, 6, 53, 423, 423, 423, 1234, 145, 37, 46, 56, 463, 3457,
    ])
  )
  console.assert(JSON.stringify(orderByPoints([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(orderByPoints([1, -11, -32, 43, 54, -98, 2, -3])) ===
    JSON.stringify([-3, -32, -98, -11, 1, 2, 43, 54])
  )
  console.assert(
    JSON.stringify(orderByPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])) ===
    JSON.stringify([1, 10, 2, 11, 3, 4, 5, 6, 7, 8, 9])
  )
  console.assert(
    JSON.stringify(orderByPoints([0, 6, 6, -76, -21, 23, 4])) ===
    JSON.stringify([-76, -21, 0, 4, 23, 6, 6])
  )
}

testOrderByPoints()
