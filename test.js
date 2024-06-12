const evenOddCount = require('./main');

const testEvenOddCount = () => {
  console.assert(JSON.stringify(evenOddCount(7)) === JSON.stringify((0, 1)))
  console.assert(JSON.stringify(evenOddCount(-78)) === JSON.stringify((1, 1)))
  console.assert(JSON.stringify(evenOddCount(3452)) === JSON.stringify((2, 2)))
  console.assert(
    JSON.stringify(evenOddCount(346211)) === JSON.stringify((3, 3))
  )
  console.assert(
    JSON.stringify(evenOddCount(-345821)) === JSON.stringify((3, 3))
  )
  console.assert(JSON.stringify(evenOddCount(-2)) === JSON.stringify((1, 0)))
  console.assert(
    JSON.stringify(evenOddCount(-45347)) === JSON.stringify((2, 3))
  )
  console.assert(JSON.stringify(evenOddCount(0)) === JSON.stringify((1, 0)))
}

testEvenOddCount()
