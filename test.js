const intersperse = require('./main');

const testIntersperse = () => {
  console.assert(JSON.stringify(intersperse([], 7)) === JSON.stringify([]))
  console.assert(
    JSON.stringify(
      intersperse([5, 6, 3, 2], 8)) === JSON.stringify([5, 8, 6, 8, 3, 8, 2])
  )
  console.assert(
    JSON.stringify(
      intersperse([2, 2, 2], 2)) === JSON.stringify([2, 2, 2, 2, 2])
  )
}

testIntersperse()
