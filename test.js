const sortedListSum = require('./main');

const testSortedListSum = () => {
  console.assert(
    JSON.stringify(sortedListSum(['aa', 'a', 'aaa'])) === JSON.stringify(['aa'])
  )
  console.assert(
    JSON.stringify(sortedListSum(['school', 'AI', 'asdf', 'b'])) ===
    JSON.stringify(['AI', 'asdf', 'school'])
  )
  console.assert(
    JSON.stringify(sortedListSum(['d', 'b', 'c', 'a'])) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(sortedListSum(['d', 'dcba', 'abcd', 'a'])) ===
    JSON.stringify(['abcd', 'dcba'])
  )
  console.assert(
    JSON.stringify(sortedListSum(['AI', 'ai', 'au'])) ===
    JSON.stringify(['AI', 'ai', 'au'])
  )
  console.assert(
    JSON.stringify(sortedListSum(['a', 'b', 'b', 'c', 'c', 'a'])) ===
    JSON.stringify([])
  )
  console.assert(
    JSON.stringify(sortedListSum(['aaaa', 'bbbb', 'dd', 'cc'])) ===
    JSON.stringify(['cc', 'dd', 'aaaa', 'bbbb'])
  )
}

testSortedListSum()
