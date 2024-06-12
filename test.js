const selectWords = require('./main');

const testSelectWords = () => {
  console.assert(
    JSON.stringify(selectWords('Mary had a little lamb', 4)) ===
    JSON.stringify(['little'])
  )
  console.assert(
    JSON.stringify(selectWords('simple white space', 2)) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(selectWords('Hello world', 4)) === JSON.stringify(['world'])
  )
  console.assert(
    JSON.stringify(selectWords('Uncle sam', 3)) === JSON.stringify(['Uncle'])
  )

  console.assert(
    JSON.stringify(selectWords('a b c d e f', 1)) ===
    JSON.stringify(['b', 'c', 'd', 'f'])
  )

  console.assert(
    JSON.stringify(selectWords('Mary had a little lamb', 3)) ===
    JSON.stringify(['Mary', 'lamb'])
  )
  console.assert(JSON.stringify(selectWords('', 4)) === JSON.stringify([]))
}

testSelectWords()
