const primeLength = require('./main');

const testPrimeLength = () => {
  console.assert(primeLength('Hello') === true)
  console.assert(primeLength('abcdcba') === true)
  console.assert(primeLength('kittens') === true)
  console.assert(primeLength('orange') === false)
  console.assert(primeLength('wow') === true)
  console.assert(primeLength('world') === true)
  console.assert(primeLength('MadaM') === true)
  console.assert(primeLength('Wow') === true)
  console.assert(primeLength('') === false)
  console.assert(primeLength('HI') === true)
  console.assert(primeLength('go') === true)
  console.assert(primeLength('gogo') === false)
  console.assert(primeLength('aaaaaaaaaaaaaaa') === false)
  console.assert(primeLength('Madam') === true)
  console.assert(primeLength('M') === false)
  console.assert(primeLength('0') === false)
}

testPrimeLength()
