const pluck = require('./main');

const testPluck = () => {
  console.assert(JSON.stringify(pluck([4, 2, 3])) === JSON.stringify([2, 1]))
  console.assert(JSON.stringify(pluck([1, 2, 3])) === JSON.stringify([2, 1]))
  console.assert(JSON.stringify(pluck([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(pluck([5, 0, 3, 0, 4, 2])) === JSON.stringify([0, 1])
  )
  console.assert(
    JSON.stringify(pluck([1, 2, 3, 0, 5, 3])) === JSON.stringify([0, 3])
  )
  console.assert(
    JSON.stringify(pluck([5, 4, 8, 4, 8])) === JSON.stringify([4, 1])
  )
  console.assert(JSON.stringify(pluck([7, 6, 7, 1])) === JSON.stringify([6, 1]))
  console.assert(JSON.stringify(pluck([7, 9, 7, 1])) === JSON.stringify([]))
}

testPluck()
