const maximum = require('./main');

const testMaximum = () => {
  console.assert(
    JSON.stringify(maximum([-3, -4, 5], 3)) === JSON.stringify([-4, -3, 5])
  )
  console.assert(
    JSON.stringify(maximum([4, -4, 4], 2)) === JSON.stringify([4, 4])
  )
  console.assert(
    JSON.stringify(maximum([-3, 2, 1, 2, -1, -2, 1], 1)) === JSON.stringify([2])
  )
  console.assert(
    JSON.stringify(maximum([123, -123, 20, 0, 1, 2, -3], 3)) ===
    JSON.stringify([2, 20, 123])
  )
  console.assert(
    JSON.stringify(maximum([-123, 20, 0, 1, 2, -3], 4)) ===
    JSON.stringify([0, 1, 2, 20])
  )
  console.assert(
    JSON.stringify(maximum([5, 15, 0, 3, -13, -8, 0], 7)) ===
    JSON.stringify([-13, -8, 0, 0, 3, 5, 15])
  )
  console.assert(
    JSON.stringify(maximum([-1, 0, 2, 5, 3, -10], 2)) === JSON.stringify([3, 5])
  )
  console.assert(
    JSON.stringify(maximum([1, 0, 5, -7], 1)) === JSON.stringify([5])
  )
  console.assert(JSON.stringify(maximum([4, -4], 2)) === JSON.stringify([-4, 4]))
  console.assert(
    JSON.stringify(maximum([-10, 10], 2)) === JSON.stringify([-10, 10])
  )
  console.assert(
    JSON.stringify(maximum([1, 2, 3, -23, 243, -400, 0], 0)) ===
    JSON.stringify([])
  )
}

testMaximum()
