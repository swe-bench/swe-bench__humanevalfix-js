const stringXor = require('./main');

const testStringXor = () => {
  console.assert(stringXor('111000', '101010') === '010010')
  console.assert(stringXor('1', '1') === '0')
  console.assert(stringXor('0101', '0000') === '0101')
}

testStringXor()
