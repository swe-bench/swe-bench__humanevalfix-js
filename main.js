/* Filter given list of any python values only for integers
  >>> filterIntegers(['a', 3.14, 5])
  [5]
  >>> filterIntegers([1, 2, 3, 'abc', {}, []])
  [1, 2, 3]
  */
const filterIntegers = (values) => {
  values.filter(x => Number.isInteger(x));
  return values;
}

const testFilterIntegers = () => {
  console.assert(JSON.stringify(filterIntegers(['a', 3.14, 5])) === JSON.stringify([5]))
  console.assert(
    JSON.stringify(filterIntegers([1, 2, 3, 'abc', {}, []])) ===
      JSON.stringify([1,2,3])
  )
}
testFilterIntegers()

module.exports = filterIntegers