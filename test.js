const maxElement = require('./main');

const testMaxElement = () => {
  console.assert(maxElement([1, 2, 3]) === 3)
  console.assert(maxElement([5, 3, -5, 2, -3, 3, 9, 0, 124, 1, -10]) === 124)
}

testMaxElement()
