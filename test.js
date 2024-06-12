const splitWords = require('./main');

const testSplitWords = () => {
  console.assert(
    JSON.stringify(splitWords('Hello world!')) ===
    JSON.stringify(['Hello', 'world!'])
  )
  console.assert(
    JSON.stringify(splitWords('Hello,world!')) ===
    JSON.stringify(['Hello', 'world!'])
  )
  console.assert(
    JSON.stringify(splitWords('Hello world,!')) ===
    JSON.stringify(['Hello', 'world,!'])
  )
  console.assert(
    JSON.stringify(splitWords('Hello,Hello,world !')) ===
    JSON.stringify(['Hello,Hello,world', '!'])
  )
  console.assert(JSON.stringify(splitWords('abcdef')) === JSON.stringify(3))
  console.assert(JSON.stringify(splitWords('aaabb')) === JSON.stringify(2))
  console.assert(JSON.stringify(splitWords('aaaBb')) === JSON.stringify(1))
  console.assert(JSON.stringify(splitWords('')) === JSON.stringify(0))
}

testSplitWords()
