const isPrime = require('./main');

const testIsPrime = () => {
  console.assert(isPrime(6) === false)
  console.assert(isPrime(101) === true)
  console.assert(isPrime(11) === true)
  console.assert(isPrime(13441) === true)
  console.assert(isPrime(61) === true)
  console.assert(isPrime(4) === false)
  console.assert(isPrime(1) === false)
  console.assert(isPrime(5) === true)
  console.assert(isPrime(11) === true)
  console.assert(isPrime(17) === true)
  console.assert(isPrime(5 * 17) === false)
  console.assert(isPrime(11 * 7) === false)
  console.assert(isPrime(13441 * 19) === false)
}

testIsPrime()
