const digitSum = require('./main');

const testDigitSum = () => {
  console.assert(digitSum('') === 0)
  console.assert(digitSum('abAB') === 131)
  console.assert(digitSum('abcCd') === 67)
  console.assert(digitSum('helloE') === 69)
  console.assert(digitSum('woArBld') === 131)
  console.assert(digitSum('aAaaaXa') === 153)
  console.assert(digitSum(' How are yOu?') === 151)
  console.assert(digitSum('You arE Very Smart') === 327)
}

testDigitSum()
