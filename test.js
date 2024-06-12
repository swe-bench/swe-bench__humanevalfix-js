const countUpTo = require('./main');

const testCountUpTo = () => {
  console.assert(JSON.stringify(countUpTo(5)) === JSON.stringify([2, 3]))
  console.assert(JSON.stringify(countUpTo(6)) === JSON.stringify([2, 3, 5]))
  console.assert(JSON.stringify(countUpTo(7)) === JSON.stringify([2, 3, 5]))
  console.assert(JSON.stringify(countUpTo(10)) === JSON.stringify([2, 3, 5, 7]))
  console.assert(JSON.stringify(countUpTo(0)) === JSON.stringify([]))
  console.assert(
    JSON.stringify(countUpTo(22)) ===
    JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19])
  )
  console.assert(JSON.stringify(countUpTo(1)) === JSON.stringify([]))
  console.assert(
    JSON.stringify(countUpTo(18)) === JSON.stringify([2, 3, 5, 7, 11, 13, 17])
  )
  console.assert(
    JSON.stringify(countUpTo(47)) ===
    JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43])
  )
  console.assert(
    JSON.stringify(countUpTo(101)) ===
    JSON.stringify([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ])
  )
}

testCountUpTo()
