const removeDuplicates = require('./main');

const testRemoveDuplicates = () => {
  console.assert(JSON.stringify(removeDuplicates([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(removeDuplicates([1, 2, 3, 4])) ===
      JSON.stringify([1, 2, 3, 4])
  )
  console.assert(
    JSON.stringify(removeDuplicates([1, 2, 3, 2, 4, 3, 5])) ===
      JSON.stringify([1, 4, 5])
  )
}

testRemoveDuplicates()
