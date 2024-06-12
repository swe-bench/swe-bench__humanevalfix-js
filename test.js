const digits = require('./main');

const testDigits = () => {
  console.assert(digits(5) === 5)
  console.assert(digits(54) === 5)
  console.assert(digits(120) === 1)
  console.assert(digits(5014) === 5)
  console.assert(digits(98765) === 315)
  console.assert(digits(5576543) === 2625)
  console.assert(digits(2468) === 0)
}

testDigits()
