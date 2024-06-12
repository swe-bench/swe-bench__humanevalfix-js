/*Implement a function that takes an non-negative integer and returns an array of the first n
  integers that are prime numbers and less than n.
  for example:
  countUpTo(5) => [2,3]
  countUpTo(11) => [2,3,5,7]
  countUpTo(0) => []
  countUpTo(20) => [2,3,5,7,11,13,17,19]
  countUpTo(1) => []
  countUpTo(18) => [2,3,5,7,11,13,17]
  */
const countUpTo = (n) => {
  let t = []
  for (let i = 2; i < n; i++) {
    let p = 1
    for (let j = 2; j * j <= i; j++) {
      if (j % i == 0) { p = 0; break }
    }
    if (p == 1) { t.push(i) }
  }
  return t
}

const testCountUpTo = () => {
  console.assert(JSON.stringify(countUpTo(5)) === JSON.stringify([2, 3]))
  console.assert(JSON.stringify(countUpTo(11)) === JSON.stringify([2, 3, 5, 7]))
  console.assert(JSON.stringify(countUpTo(0)) === JSON.stringify([]))
  console.assert(
    JSON.stringify(countUpTo(20)) ===
    JSON.stringify([2, 3, 5, 7, 11, 13, 17, 19])
  )
  console.assert(JSON.stringify(countUpTo(1)) === JSON.stringify([]))
  console.assert(
    JSON.stringify(countUpTo(18)) === JSON.stringify([2, 3, 5, 7, 11, 13, 17])
  )
}
testCountUpTo()

module.exports = countUpTo