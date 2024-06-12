const hexKey = require('./main');

const testHexKey = () => {
  console.assert(1 === hexKey('AB'))
  console.assert(2 === hexKey('1077E'))
  console.assert(4 === hexKey('ABED1A33'))
  console.assert(2 === hexKey('2020'))
  console.assert(6 === hexKey('123456789ABCDEF0'))
  console.assert(12 === hexKey('112233445566778899AABBCCDDEEFF00'))
  console.assert(0 === hexKey(''))
}

testHexKey()
