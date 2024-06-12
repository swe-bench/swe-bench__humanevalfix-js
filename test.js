const derivative = require('./main');

const testDerivative = () => {
  console.assert(
    JSON.stringify(derivative([3, 1, 2, 4, 5])) ===
      JSON.stringify([1, 4, 12, 20])
  )
  console.assert(
    JSON.stringify(derivative([1, 2, 3])) === JSON.stringify([2, 6])
  )
  console.assert(
    JSON.stringify(derivative([3, 2, 1])) === JSON.stringify([2, 2])
  )
  console.assert(
    JSON.stringify(derivative([3, 2, 1, 0, 4])) ===
      JSON.stringify([2, 2, 0, 16])
  )
  console.assert(JSON.stringify(derivative([1])) === JSON.stringify([]))
}

testDerivative()
