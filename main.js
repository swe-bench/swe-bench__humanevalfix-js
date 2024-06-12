/* Create a function that returns a tuple (a, b), where 'a' is
  the largest of negative integers, and 'b' is the smallest
  of positive integers in a list.
  If there is no negative or positive integers, return them as null.
  Examples:
  largestSmallestIntegers([2, 4, 1, 3, 5, 7]) == (null, 1)
  largestSmallestIntegers([]) == (null, null)
  largestSmallestIntegers([0]) == (null, null)
  */
const largestSmallestIntegers = (lst) => {
  let a = Infinity
  let b = -Infinity
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] > 0 && lst[i] < a) { a = lst[i] }
    if (lst[i] < 0 && lst[i] > b) { b = lst[i] }
    if (lst[i] < a) { b = a }
    if (lst[i] < b) { a = b }
  }
  if (a == Infinity) { a = null }
  if (b == -Infinity) { b = null }
  return (b, a)
}

const testLargestSmallestIntegers = () => {
  console.assert(
    JSON.stringify(largestSmallestIntegers([2, 4, 1, 3, 5, 7])) ===
    JSON.stringify((null, 1))
  )
  console.assert(
    JSON.stringify(largestSmallestIntegers([])) === JSON.stringify((null, null))
  )
  console.assert(
    JSON.stringify(largestSmallestIntegers([0])) ===
    JSON.stringify((null, null))
  )
}
testLargestSmallestIntegers()

module.exports = largestSmallestIntegers