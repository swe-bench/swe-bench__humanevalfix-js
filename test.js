const strangeSortList = require('./main');

const testStrangeSortList = () => {
  console.assert(
    JSON.stringify(strangeSortList([1, 2, 3, 4])) ===
      JSON.stringify([1, 4, 2, 3])
  )
  console.assert(
    JSON.stringify(strangeSortList([5, 6, 7, 8, 9])) ===
      JSON.stringify([5, 9, 6, 8, 7])
  )
  console.assert(
    JSON.stringify(strangeSortList([1, 2, 3, 4, 5])) ===
      JSON.stringify([1, 5, 2, 4, 3])
  )
  console.assert(
    JSON.stringify(strangeSortList([5, 6, 7, 8, 9, 1])) ===
      JSON.stringify([1, 9, 5, 8, 6, 7])
  )
  console.assert(
    JSON.stringify(strangeSortList([5, 5, 5, 5])) ===
      JSON.stringify([5, 5, 5, 5])
  )
  console.assert(JSON.stringify(strangeSortList([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(strangeSortList([1, 2, 3, 4, 5, 6, 7, 8])) ===
      JSON.stringify([1, 8, 2, 7, 3, 6, 4, 5])
  )
  console.assert(
    JSON.stringify(strangeSortList([0, 2, 2, 2, 5, 5, -5, -5])) ===
      JSON.stringify([-5, 5, -5, 5, 0, 2, 2, 2])
  )
  console.assert(
    JSON.stringify(strangeSortList([111111])) === JSON.stringify([111111])
  )
}

testStrangeSortList()
