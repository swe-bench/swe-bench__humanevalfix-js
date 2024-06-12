const triangleArea = require('./main');

const testTriangleArea = () => {
  console.assert(triangleArea(3, 4, 5) == 6.0)
  console.assert(triangleArea(1, 2, 10) == -1)
  console.assert(triangleArea(4, 8, 5) == 8.18)
  console.assert(triangleArea(2, 2, 2) == 1.73)
  console.assert(triangleArea(1, 2, 3) == -1)
  console.assert(triangleArea(10, 5, 7) == 16.25)
  console.assert(triangleArea(2, 6, 3) == -1)
  console.assert(triangleArea(1, 1, 1) == 0.43)
  console.assert(triangleArea(2, 2, 10) == -1)
}

testTriangleArea()
