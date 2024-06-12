const compareOne = require('./main');

const testCompareOne = () => {
  console.assert(compareOne(1, 2) === 2)
  console.assert(compareOne(1, 2.5) === 2.5)
  console.assert(compareOne(2, 3) === 3)
  console.assert(compareOne(5, 6) === 6)
  console.assert(compareOne(1, '2,3') === '2,3')
  console.assert(compareOne('5,1', '6') === '6')
  console.assert(compareOne('1', '2') === '2')
  console.assert(compareOne('1', 1) === null)
}

testCompareOne()
