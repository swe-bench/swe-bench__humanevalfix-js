const filterByPrefix = require('./main');

const testFilterByPrefix = () => {
  console.assert(
    JSON.stringify(filterByPrefix([], 'john')) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(
      filterByPrefix(['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'], 'xxx')
    ) === JSON.stringify(['xxx', 'xxxAAA', 'xxx'])
  )
}

testFilterByPrefix()
