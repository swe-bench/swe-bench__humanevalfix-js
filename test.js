const compare = require('./main');

const testCompare = () => {
  console.assert(
    JSON.stringify(compare([1, 2, 3, 4, 5, 1], [1, 2, 3, 4, 2, -2])) ===
    JSON.stringify([0, 0, 0, 0, 3, 3])
  )
  console.assert(
    JSON.stringify(compare([0,5,0,0,0,4],[4,1,1,0,0,-2])) ===
    JSON.stringify([4,4,1,0,0,6])
  )
  console.assert(
    JSON.stringify(compare([1, 2, 3, 4, 5, 1], [1, 2, 3, 4, 2, -2])) ===
    JSON.stringify([0, 0, 0, 0, 3, 3])
  )
  console.assert(
    JSON.stringify(compare([0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0])) ===
    JSON.stringify([0, 0, 0, 0, 0, 0])
  )
  console.assert(
    JSON.stringify(compare([1, 2, 3], [-1, -2, -3])) ===
    JSON.stringify([2, 4, 6])
  )
  console.assert(
    JSON.stringify(compare([1, 2, 3, 5], [-1, 2, 3, 4])) ===
    JSON.stringify([2, 0, 0, 1])
  )
}

testCompare()
