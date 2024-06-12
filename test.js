const roundedAvg = require('./main');

const testRoundedAvg = () => {
  console.assert(roundedAvg(1, 5) === '0b11')
  console.assert(roundedAvg(7, 13) === '0b1010')
  console.assert(roundedAvg(964, 977) === '0b1111001011')
  console.assert(roundedAvg(996, 997) === '0b1111100101')
  console.assert(roundedAvg(560, 851) === '0b1011000010')
  console.assert(roundedAvg(185, 546) === '0b101101110')
  console.assert(roundedAvg(362, 496) === '0b110101101')
  console.assert(roundedAvg(350, 902) === '0b1001110010')
  console.assert(roundedAvg(197, 233) === '0b11010111')
  console.assert(roundedAvg(7, 5) === -1)
  console.assert(roundedAvg(5, 1) === -1)
  console.assert(roundedAvg(5, 5) === '0b101')
}

testRoundedAvg()
