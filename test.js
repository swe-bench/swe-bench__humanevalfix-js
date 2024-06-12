const byLength = require('./main');

const testByLength = () => {
  console.assert(
    JSON.stringify(byLength([2, 1, 1, 4, 5, 8, 2, 3])) ===
    JSON.stringify([
      'Eight',
      'Five',
      'Four',
      'Three',
      'Two',
      'Two',
      'One',
      'One',
    ])
  )
  console.assert(JSON.stringify(byLength([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(byLength([1, -1, 55])) === JSON.stringify(['One'])
  )
  console.assert(
    JSON.stringify(byLength([1, -1, 3, 2])) ===
    JSON.stringify(['Three', 'Two', 'One'])
  )
  console.assert(
    JSON.stringify(byLength([9, 4, 8])) ===
    JSON.stringify(['Nine', 'Eight', 'Four'])
  )
}

testByLength()
