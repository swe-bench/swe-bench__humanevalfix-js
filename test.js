const sumProduct = require('./main');

const testSumProduct = () => {
  console.assert(JSON.stringify(sumProduct([])) === JSON.stringify([0, 1]))
  console.assert(
    JSON.stringify(sumProduct([1, 1, 1])) === JSON.stringify([3, 1])
  )
  console.assert(
    JSON.stringify(sumProduct([100, 0])) === JSON.stringify([100, 0])
  )
  console.assert(
    JSON.stringify(
      sumProduct([3, 5, 7])) === JSON.stringify([3 + 5 + 7, 3 * 5 * 7])
  )
  console.assert(JSON.stringify(sumProduct([10])) === JSON.stringify([10, 10]))
}

testSumProduct()
