const longest = require('./main');

const testLongest = () => {
  console.assert(longest([]) === null)
  console.assert(longest(['x', 'y', 'z']) === 'x')
  console.assert(longest(['x', 'yyy', 'zzzz', 'www', 'kkkk', 'abc']) === 'zzzz')
}

testLongest()
