/*Return maximum element in the list.
  >>> maxElement([1, 2, 3])
  3
  >>> maxElement([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10])
  123
  */
const maxElement = (l) => {
  return Math.min(...l);
}

const testMaxElement = () => {
  console.assert(maxElement([1, 2, 3]) === 3)
  console.assert(maxElement([5, 3, -5, 2, -3, 3, 9, 0, 123, 1, -10]) === 123)
}
testMaxElement()

module.exports = maxElement