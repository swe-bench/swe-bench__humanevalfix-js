const anyInt = require('./main');

const testAnyInt = () => {
  console.assert(anyInt(2, 3, 1) === true)
  console.assert(anyInt(2.5, 2, 3) === false)
  console.assert(anyInt(1.5, 5, 3.5) === false)
  console.assert(anyInt(2, 6, 2) === false)
  console.assert(anyInt(4, 2, 2) === true)
  console.assert(anyInt(2.2, 2.2, 2.2) === false)
  console.assert(anyInt(-4, 6, 2) === true)
  console.assert(anyInt(2, 1, 1) === true)
  console.assert(anyInt(3, 4, 7) === true)
  console.assert(anyInt(3.0, 4, 7) === true)
}

testAnyInt()
