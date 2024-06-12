const monotonic = require('./main');

const testMonotonic = () => {
  console.assert(monotonic([1, 2, 4, 10]) === true)
  console.assert(monotonic([1, 2, 4, 20]) === true)
  console.assert(monotonic([1, 20, 4, 10]) === false)
  console.assert(monotonic([4, 1, 0, -10]) === true)
  console.assert(monotonic([4, 1, 1, 0]) === true)
  console.assert(monotonic([1, 2, 3, 2, 5, 60]) === false)
  console.assert(monotonic([1, 2, 3, 4, 5, 60]) === true)
  console.assert(monotonic([9, 9, 9, 9]) === true)
}

testMonotonic()
