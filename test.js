const greatestCommonDivisor = require('./main');

const testGreatestCommonDivisor = () => {
  console.assert(greatestCommonDivisor(3, 7) === 1)
  console.assert(greatestCommonDivisor(10, 15) === 5)
  console.assert(greatestCommonDivisor(49, 14) === 7)
  console.assert(greatestCommonDivisor(144, 60) === 12)
}

testGreatestCommonDivisor()
