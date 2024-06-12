const sumSquares = require('./main');

const testSumSquares = () => {
  console.assert(sumSquares([1, 2, 3]) === 14)
  console.assert(sumSquares([1.0, 2, 3]) === 14)
  console.assert(sumSquares([1, 3, 5, 7]) === 84)
  console.assert(sumSquares([1.4, 4.2, 0]) === 29)
  console.assert(sumSquares([-2.4, 1, 1]) === 6)

  console.assert(sumSquares([100, 1, 15, 2]) === 10230)
  console.assert(sumSquares([10000, 10000]) === 200000000)
  console.assert(sumSquares([-1.4, 4.6, 6.3]) === 75)
  console.assert(sumSquares([-1.4, 17.9, 18.9, 19.9]) === 1086)

  console.assert(sumSquares([0]) === 0)
  console.assert(sumSquares([-1]) === 1)
  console.assert(sumSquares([-1, 1, 0]) === 2)
}

testSumSquares()
