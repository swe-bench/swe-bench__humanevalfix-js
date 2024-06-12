const closestInteger = require('./main');

const testClosestInteger = () => {
  console.assert(closestInteger('10') === 10)
  console.assert(closestInteger('14.5') === 15)
  console.assert(closestInteger('-15.5') === -16)
  console.assert(closestInteger('15.3') === 15)
  console.assert(closestInteger('0') === 0)
}

testClosestInteger()
