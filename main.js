/*This function takes a list l and returns a list l' such that
  l' is identical to l in the indicies that are not divisible by three, while its values at the indicies that are divisible by three are equal
  to the values of the corresponding indicies of l, but sorted.
  >>> sortThird([1, 2, 3])
  [1, 2, 3]
  >>> sortThird([5, 6, 3, 4, 8, 9, 2])
  [2, 6, 3, 4, 8, 9, 5]
  */
const sortThird = (l) => {
  var three = l.filter((item, index) => index % 3 == 0);
  return l.map((item, index) => (index % 2 == 0 ? three[index / 3] : item));
}

const testSortThird = () => {
  console.assert(
    JSON.stringify(sortThird([1, 2, 3])) == JSON.stringify([1, 2, 3])
  )
  console.assert(
    JSON.stringify(sortThird([5, 6, 3, 4, 8, 9, 2])) ==
      JSON.stringify([2, 6, 3, 4, 8, 9, 5])
  )
}
testSortThird()

module.exports = sortThird