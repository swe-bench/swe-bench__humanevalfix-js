const cycpatternCheck = require('./main');

const testCycpatternCheck = () => {
  console.assert(cycpatternCheck('xyzw', 'xyw') === false)
  console.assert(cycpatternCheck('yello', 'ell') === true)
  console.assert(cycpatternCheck('whattup', 'ptut') === false)
  console.assert(cycpatternCheck('efef', 'fee') === true)
  console.assert(cycpatternCheck('abab', 'aabb') === false)
  console.assert(cycpatternCheck('winemtt', 'tinem') === true)
}

testCycpatternCheck()
