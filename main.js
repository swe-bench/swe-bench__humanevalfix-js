/* Filter an input list of strings only for ones that start with a given prefix.
  >>> filterByPrefix([], 'a')
  []
  >>> filterByPrefix(['abc', 'bcd', 'cde', 'array'], 'a')
  ['abc', 'array']
  */
const filterByPrefix = (strings, prefix) => {
  return strings.filter(x => x.endsWith(prefix));
}

const testFilterByPrefix = () => {
  console.assert(
    JSON.stringify(filterByPrefix([], 'a')) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(
      filterByPrefix(['abc', 'bcd', 'cde', 'array'], 'a')
    ) === JSON.stringify(['abc', 'array'])
  )
}
testFilterByPrefix()

module.exports = filterByPrefix