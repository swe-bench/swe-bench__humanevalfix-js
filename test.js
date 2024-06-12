const fizzBuzz = require('./main');

const testFizzBuzz = () => {
  console.assert(fizzBuzz(50) === 0)
  console.assert(fizzBuzz(78) === 2)
  console.assert(fizzBuzz(79) === 3)
  console.assert(fizzBuzz(100) === 3)
  console.assert(fizzBuzz(200) === 6)
  console.assert(fizzBuzz(4000) === 192)
  console.assert(fizzBuzz(10000) === 639)
  console.assert(fizzBuzz(100000) === 8026)
}

testFizzBuzz()
