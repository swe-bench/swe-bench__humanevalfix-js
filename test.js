const filterBySubstring = require('./main');

const testFilterBySubstring = () => {
  console.assert(
    JSON.stringify(filterBySubstring([], 'john')) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(
      filterBySubstring(
        ['xxx', 'asd', 'xxy', 'john doe', 'xxxAAA', 'xxx'],
        'xxx'
      )
    ) === JSON.stringify(['xxx', 'xxxAAA', 'xxx'])
  )
  console.assert(
    JSON.stringify(
      filterBySubstring(
        ['xxx', 'asd', 'aaaxxy', 'john doe', 'xxxAAA', 'xxx'],
        'xx'
      )
    ) === JSON.stringify(['xxx', 'aaaxxy', 'xxxAAA', 'xxx'])
  )
  console.assert(
    JSON.stringify(
      filterBySubstring(['grunt', 'trumpet', 'prune', 'gruesome'], 'run')
    ) === JSON.stringify(['grunt', 'prune'])
  )
}

testFilterBySubstring()
