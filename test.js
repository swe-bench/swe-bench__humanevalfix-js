const isEqualToSumEven = require('./main');

const testIsEqualToSumEven = () => {
  console.assert(isEqualToSumEven(4) === false)
  console.assert(isEqualToSumEven(6) === false)
  console.assert(isEqualToSumEven(8) === true)
  console.assert(isEqualToSumEven(10) === true)
  console.assert(isEqualToSumEven(11) === false)
  console.assert(isEqualToSumEven(12) === true)
  console.assert(isEqualToSumEven(13) === false)
  console.assert(isEqualToSumEven(16) === true)
}

testIsEqualToSumEven()
