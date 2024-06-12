const prodSigns = require('./main');

const testProdSigns = () => {
  console.assert(prodSigns([1, 2, 2, -4]) === -9)
  console.assert(prodSigns([0, 1]) === 0)
  console.assert(prodSigns([1, 1, 1, 2, 3, -1, 1]) === -10)
  console.assert(prodSigns([]) === null)
  console.assert(prodSigns([2, 4, 1, 2, -1, -1, 9]) === 20)
  console.assert(prodSigns([-1, 1, -1, 1]) === 4)
  console.assert(prodSigns([-1, 1, 1, 1]) === -4)
  console.assert(prodSigns([-1, 1, 1, 0]) === 0)
}

testProdSigns()
