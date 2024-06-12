const isSimplePower = require('./main');

const testIsSimplePower = () => {
  console.assert(isSimplePower(1, 4) === true)
  console.assert(isSimplePower(2, 2) === true)
  console.assert(isSimplePower(8, 2) === true)
  console.assert(isSimplePower(3, 2) === false)
  console.assert(isSimplePower(3, 1) === false)
  console.assert(isSimplePower(5, 3) === false)
  console.assert(isSimplePower(16, 2) === true)
  console.assert(isSimplePower(143214, 16) === false)
  console.assert(isSimplePower(4, 2) === true)
  console.assert(isSimplePower(9, 3) === true)
  console.assert(isSimplePower(16, 4) === true)
  console.assert(isSimplePower(24, 2) === false)
  console.assert(isSimplePower(128, 4) === false)
  console.assert(isSimplePower(12, 6) === false)
  console.assert(isSimplePower(1, 1) === true)
  console.assert(isSimplePower(1, 12) === true)
}

testIsSimplePower()
