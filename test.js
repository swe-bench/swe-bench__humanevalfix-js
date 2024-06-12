const xOrY = require('./main');

const testXOrY = () => {
  console.assert(xOrY(7, 34, 12) === 34)
  console.assert(xOrY(15, 8, 5) === 5)
  console.assert(xOrY(3, 33, 5212) === 33)
  console.assert(xOrY(1259, 3, 52) === 3)
  console.assert(xOrY(7919, -1, 12) === -1)
  console.assert(xOrY(3609, 1245, 583) === 583)
  console.assert(xOrY(91, 56, 129) === 129)
  console.assert(xOrY(6, 34, 1234) === 1234)
  console.assert(xOrY(1, 2, 0) === 0)
  console.assert(xOrY(2, 2, 0) === 2)
}

testXOrY()
