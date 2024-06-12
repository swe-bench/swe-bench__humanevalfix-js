const decimalToBinary = require('./main');

const testDecimalToBinary = () => {
  console.assert(decimalToBinary(0) === 'db0db')
  console.assert(decimalToBinary(32) === 'db100000db')
  console.assert(decimalToBinary(103) === 'db1100111db')
  console.assert(decimalToBinary(15) === 'db1111db')
}

testDecimalToBinary()
