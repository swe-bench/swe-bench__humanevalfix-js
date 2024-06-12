const addElements = require('./main');

const testAddElements = () => {
  console.assert(addElements([1, -2, -3, 41, 57, 76, 87, 88, 99], 3) === -4)
  console.assert(addElements([111, 121, 3, 4000, 5, 6], 2) === 0)
  console.assert(addElements([11, 21, 3, 90, 5, 6, 7, 8, 9], 4) === 125)
  console.assert(addElements([111, 21, 3, 4000, 5, 6, 7, 8, 9], 4) === 24)
  console.assert(addElements([1], 1) === 1)
}

testAddElements()
