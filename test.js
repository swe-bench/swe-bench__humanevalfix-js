const generateIntegers = require('./main');

const testGenerateIntegers = () => {
  console.assert(
    JSON.stringify(generateIntegers(2, 10)) === JSON.stringify([2, 4, 6, 8])
  )
  console.assert(
    JSON.stringify(generateIntegers(10, 2)) === JSON.stringify([2, 4, 6, 8])
  )
  console.assert(
    JSON.stringify(generateIntegers(132, 2)) === JSON.stringify([2, 4, 6, 8])
  )
  console.assert(
    JSON.stringify(generateIntegers(17, 89)) === JSON.stringify([])
  )
}

testGenerateIntegers()
