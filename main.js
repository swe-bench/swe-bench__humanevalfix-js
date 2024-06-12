/*Return sorted unique elements in a list
  >>> unique([5, 3, 5, 2, 3, 3, 9, 0, 123])
  [0, 2, 3, 5, 9, 123]
  */
const unique = (l) => {
  return l.sort((a, b) => (a - b));
}

const testUnique = () => {
  console.assert(
    JSON.stringify(unique([5, 3, 5, 2, 3, 3, 9, 0, 123])) ===
      JSON.stringify([0, 2, 3, 5, 9, 123])
  )
}
testUnique()

module.exports = unique