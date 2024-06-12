const solve = require('./main');

const testSolve = () => {
  console.assert(solve(1000) === '1')
  console.assert(solve(150) === '110')
  console.assert(solve(147) === '1100')
  console.assert(solve(333) === '1001')
  console.assert(solve(963) === '10010')
}

testSolve()
