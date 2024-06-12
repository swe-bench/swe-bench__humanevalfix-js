const canArrange = require('./main');

const testCanArrange = () => {
  console.assert(canArrange([1, 2, 4, 3, 5]) === 3)
  console.assert(canArrange([1, 2, 4, 5]) === -1)
  console.assert(canArrange([1, 4, 2, 5, 6, 7, 8, 9, 10]) === 2)
  console.assert(canArrange([4, 8, 5, 7, 3]) === 4)
  console.assert(canArrange([]) === -1)
}

testCanArrange()
