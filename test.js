const triangleArea = require('./main');

const testTriangleArea = () => {
  console.assert(triangleArea(5, 3) === 7.5)
  console.assert(triangleArea(2, 2) === 2.0)
  console.assert(triangleArea(10, 8) === 40.0)
}

testTriangleArea()
