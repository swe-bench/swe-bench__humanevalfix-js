const specialFactorial = require('./main');

const testSpecialFactorial = () => {
  console.assert(specialFactorial(4) === 288)
  console.assert(specialFactorial(5) === 34560)
  console.assert(specialFactorial(7) === 125411328000)
  console.assert(specialFactorial(1) === 1)
}

testSpecialFactorial()
