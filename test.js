const isSorted = require('./main');

const testIsSorted = () => {
  console.assert(isSorted([5]) === true)
  console.assert(isSorted([1, 2, 3, 4, 5]) === true)
  console.assert(isSorted([1, 3, 2, 4, 5]) === false)
  console.assert(isSorted([1, 2, 3, 4, 5, 6]) === true)
  console.assert(isSorted([1, 2, 3, 4, 5, 6, 7]) === true)
  console.assert(isSorted([1, 3, 2, 4, 5, 6, 7]) === false)
  console.assert(isSorted([]) === true)
  console.assert(isSorted([1]) === true)
  console.assert(isSorted([3, 2, 1]) === false)
  console.assert(isSorted([1, 2, 2, 2, 3, 4]) === false)
  console.assert(isSorted([1, 2, 3, 3, 3, 4]) === false)
  console.assert(isSorted([1, 2, 2, 3, 3, 4]) === true)
  console.assert(isSorted([1, 2, 3, 4]) === true)
}

testIsSorted()
