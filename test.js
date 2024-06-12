const filterIntegers = require('./main');

const testFilterIntegers = () => {
  console.assert(JSON.stringify(filterIntegers([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(filterIntegers([4, {}, [], 23.2, 9, 'adasd'])) ===
      JSON.stringify([4, 9])
  )
  console.assert(
    JSON.stringify(filterIntegers([3, 'c', 3, 3, 'a', 'b'])) ===
      JSON.stringify([3, 3, 3])
  )
}

testFilterIntegers()
