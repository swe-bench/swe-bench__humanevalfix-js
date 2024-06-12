const modp = require('./main');

const testModp = () => {
  console.assert(modp(3, 5) === 3)
  console.assert(modp(1101, 101) === 2)
  console.assert(modp(0, 101) === 1)
  console.assert(modp(3, 11) === 8)
  console.assert(modp(100, 101) === 1)
  console.assert(modp(30, 5) === 4)
  console.assert(modp(31, 5) === 3)
}

testModp()
