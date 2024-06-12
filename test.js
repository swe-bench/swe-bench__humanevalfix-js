const isHappy = require('./main');

const testIsHappy = () => {
  console.assert(isHappy('a') === false)
  console.assert(isHappy('aa') === false)
  console.assert(isHappy('abcd') === true)
  console.assert(isHappy('aabb') === false)
  console.assert(isHappy('adb') === true)
  console.assert(isHappy('xyy') === false)
  console.assert(isHappy('iopaxpoi') === true)
  console.assert(isHappy('iopaxioi') === false)
}

testIsHappy()
