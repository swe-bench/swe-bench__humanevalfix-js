const primeFib = require('./main');

const testPrimeFib = () => {
  console.assert(primeFib(1) === 2)
  console.assert(primeFib(2) === 3)
  console.assert(primeFib(3) === 5)
  console.assert(primeFib(4) === 13)
  console.assert(primeFib(5) === 89)
  console.assert(primeFib(6) === 233)
  console.assert(primeFib(7) === 1597)
  console.assert(primeFib(8) === 28657)
  console.assert(primeFib(9) === 514229)
  console.assert(primeFib(10) === 433494437)
}

testPrimeFib()
