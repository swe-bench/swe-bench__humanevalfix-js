const solve = require('./main');

const testSolve = () => {
  console.assert(solve('AsDf') === 'aSdF')
  console.assert(solve('1234') === '4321')
  console.assert(solve('ab') === 'AB')
  console.assert(solve('#a@C') === '#A@c')
  console.assert(solve('#AsdfW^45') === '#aSDFw^45')
  console.assert(solve('#6@2') === '2@6#')
  console.assert(solve('#$a^D') === '#$A^d')
  console.assert(solve('#ccc') === '#CCC')
}

testSolve()
