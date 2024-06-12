const isMultiplyPrime = require('./main');

const testIsMultiplyPrime = () => {
  console.assert(isMultiplyPrime(5) === false)
  console.assert(isMultiplyPrime(30) === true)
  console.assert(isMultiplyPrime(8) === true)
  console.assert(isMultiplyPrime(10) === false)
  console.assert(isMultiplyPrime(125) === true)
  console.assert(isMultiplyPrime(3 * 5 * 7) === true)
  console.assert(isMultiplyPrime(3 * 6 * 7) === false)
  console.assert(isMultiplyPrime(9 * 9 * 9) === false)
  console.assert(isMultiplyPrime(11 * 9 * 9) === false)
  console.assert(isMultiplyPrime(11 * 13 * 7) === true)
}

testIsMultiplyPrime()
