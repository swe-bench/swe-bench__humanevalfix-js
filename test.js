const getOddCollatz = require('./main');

const testGetOddCollatz = () => {
  console.assert(
    JSON.stringify(getOddCollatz(14)) === JSON.stringify([1, 5, 7, 11, 13, 17])
  )
  console.assert(JSON.stringify(getOddCollatz(5)) === JSON.stringify([1, 5]))
  console.assert(JSON.stringify(getOddCollatz(12)) === JSON.stringify([1, 3, 5]))
  console.assert(JSON.stringify(getOddCollatz(1)) === JSON.stringify([1]))
}

testGetOddCollatz()
