const willItFly = require('./main');

const testWillItFly = () => {
  console.assert(willItFly([3, 2, 3], 9) === true)
  console.assert(willItFly([1, 2], 5) === false)
  console.assert(willItFly([3], 5) === true)
  console.assert(willItFly([3, 2, 3], 1) === false)
  console.assert(willItFly([1, 2, 3], 6) === false)
  console.assert(willItFly([5], 5) === true)
}

testWillItFly()
