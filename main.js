/* Filter an input list of strings only for ones that contain given substring
  >>> filterBySubstring([], 'a')
  []
  >>> filterBySubstring(['abc', 'bacd', 'cde', 'array'], 'a')
  ['abc', 'bacd', 'array']
  */
const filterBySubstring = (strings, substring) => {
  return strings.filter(x => substring.indexOf(x) != -1);
}

const testFilterBySubstring = () => {
  console.assert(
    JSON.stringify(filterBySubstring([], 'a')) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(
      filterBySubstring(
        ['abc', 'bacd', 'cde', 'array'], 'a'
      )
    ) === JSON.stringify(['abc', 'bacd', 'array'])
  )
}
testFilterBySubstring()

module.exports = filterBySubstring