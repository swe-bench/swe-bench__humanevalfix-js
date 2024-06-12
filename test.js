const makeAPile = require('./main');

const testMakeAPile = () => {
  console.assert(JSON.stringify(makeAPile(3)) === JSON.stringify([3, 5, 7]))
  console.assert(JSON.stringify(makeAPile(4)) === JSON.stringify([4, 6, 8, 10]))
  console.assert(
    JSON.stringify(makeAPile(5)) === JSON.stringify([5, 7, 9, 11, 13])
  )
  console.assert(
    JSON.stringify(makeAPile(6)) === JSON.stringify([6, 8, 10, 12, 14, 16])
  )
  console.assert(
    JSON.stringify(makeAPile(8)) ===
    JSON.stringify([8, 10, 12, 14, 16, 18, 20, 22])
  )
}

testMakeAPile()
