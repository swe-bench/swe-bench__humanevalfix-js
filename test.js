const allPrefixes = require('./main');

const testAllPrefixes = () => {
  console.assert(JSON.stringify(allPrefixes('')) === JSON.stringify([]))
  console.assert(
    JSON.stringify(
      allPrefixes('asdfgh')) ===
        JSON.stringify(['a', 'as', 'asd', 'asdf', 'asdfg', 'asdfgh'])
  )
  console.assert(
    JSON.stringify(allPrefixes('WWW')) === JSON.stringify(['W', 'WW', 'WWW'])
  )
}

testAllPrefixes()
