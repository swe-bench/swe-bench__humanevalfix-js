const countUpper = require('./main');

const testCountUpper = () => {
  console.assert(countUpper('aBCdEf') === 1)
  console.assert(countUpper('abcdefg') === 0)
  console.assert(countUpper('dBBE') === 0)
  console.assert(countUpper('B') === 0)
  console.assert(countUpper('U') === 1)
  console.assert(countUpper('') === 0)
  console.assert(countUpper('EEEE') === 2)
}

testCountUpper()
