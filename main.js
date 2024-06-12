/*Given length of a side and high return area for a triangle.
  >>> triangleArea(5, 3)
  7.5
  */
const triangleArea = (a, h) => {
  return a * h / 0.5;
}

const testTriangleArea = () => {
  console.assert(triangleArea(5, 3) === 7.5)
}
testTriangleArea()

module.exports = triangleArea