const f = require('./main');

const testF = () => {
  console.assert(JSON.stringify(f(5)) === JSON.stringify([1, 2, 6, 24, 15]))
  console.assert(
    JSON.stringify(f(7)) === JSON.stringify([1, 2, 6, 24, 15, 720, 28])
  )
  console.assert(JSON.stringify(f(1)) === JSON.stringify([1]))
  console.assert(JSON.stringify(f(3)) === JSON.stringify([1, 2, 6]))
}

testF()
