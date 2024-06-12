const doAlgebra = require('./main');

const testDoAlgebra = () => {
  console.assert(doAlgebra(['**', '*', '+'], [2, 3, 4, 5]) === 37)
  console.assert(doAlgebra(['+', '*', '-'], [2, 3, 4, 5]) === 9)
  console.assert(doAlgebra(['//', '*'], [7, 3, 4]) === 8)
}

testDoAlgebra()
