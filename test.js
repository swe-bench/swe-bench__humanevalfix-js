const rightAngleTriangle = require('./main');

const testRightAngleTriangle = () => {
  console.assert(rightAngleTriangle(3, 4, 5) === true)
  console.assert(rightAngleTriangle(1, 2, 3) === false)
  console.assert(rightAngleTriangle(10, 6, 8) === true)
  console.assert(rightAngleTriangle(2, 2, 2) === false)
  console.assert(rightAngleTriangle(7, 24, 25) === true)
  console.assert(rightAngleTriangle(10, 5, 7) === false)
  console.assert(rightAngleTriangle(5, 12, 13) === true)
  console.assert(rightAngleTriangle(15, 8, 17) === true)
  console.assert(rightAngleTriangle(48, 55, 73) === true)
  console.assert(rightAngleTriangle(1, 1, 1) === false)
  console.assert(rightAngleTriangle(2, 2, 10) === false)
}

testRightAngleTriangle()
