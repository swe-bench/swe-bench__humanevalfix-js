const circularShift = require('./main');

const testCircularShift = () => {
  console.assert(circularShift(100, 2) === '001')
  console.assert(circularShift(12, 2) === '12')
  console.assert(circularShift(97, 8) === '79')
  console.assert(circularShift(12, 1) === '21')
  console.assert(circularShift(11, 101) === '11')
}

testCircularShift()
