const findClosestElements = require('./main');

const testFindClosestElements = () => {
  console.assert(
    JSON.stringify(findClosestElements([1.0, 2.0, 3.9, 4.0, 5.0, 2.2])) ===
      JSON.stringify([3.9, 4.0])
  )
  console.assert(
    JSON.stringify(findClosestElements([1.0, 2.0, 5.9, 4.0, 5.0])) ===
      JSON.stringify([5.0, 5.9])
  )
  console.assert(
    JSON.stringify(findClosestElements([1.0, 2.0, 3.0, 4.0, 5.0, 2.2])) ===
      JSON.stringify([2.0, 2.2])
  )
  console.assert(
    JSON.stringify(findClosestElements([1.0, 2.0, 3.0, 4.0, 5.0, 2.0])) ===
      JSON.stringify([2.0, 2.0])
  )
  console.assert(
    JSON.stringify(findClosestElements([1.1, 2.2, 3.1, 4.1, 5.1])) ===
      JSON.stringify([2.2, 3.1])
  )
}

testFindClosestElements()
