const findMax = require('./main');

const testFindMax = () => {
  console.assert(findMax(['name', 'of', 'string']) === 'string')
  console.assert(findMax(['name', 'enam', 'game']) === 'enam')
  console.assert(findMax(['aaaaaaa', 'bb', 'cc']) === 'aaaaaaa')
  console.assert(findMax(['abc', 'cba']) === 'abc')
  console.assert(
    findMax(['play', 'this', 'game', 'of', 'footbott']) === 'footbott'
  )
  console.assert(findMax(['we', 'are', 'gonna', 'rock']) === 'gonna')
  console.assert(findMax(['we', 'are', 'a', 'mad', 'nation']) === 'nation')
  console.assert(findMax(['this', 'is', 'a', 'prrk']) === 'this')
  console.assert(findMax(['b']) === 'b')
  console.assert(findMax(['play', 'play', 'play']) === 'play')
}

testFindMax()
