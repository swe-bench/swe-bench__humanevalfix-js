const simplify = require('./main');

const testSimplify = () => {
  console.assert(simplify('1/5', '5/1') === true)
  console.assert(simplify('1/6', '2/1') === false)
  console.assert(simplify('5/1', '3/1') === true)
  console.assert(simplify('7/10', '10/2') === false)
  console.assert(simplify('2/10', '50/10') === true)
  console.assert(simplify('7/2', '4/2') === true)
  console.assert(simplify('11/6', '6/1') === true)
  console.assert(simplify('2/3', '5/2') === false)
  console.assert(simplify('5/2', '3/5') === false)
  console.assert(simplify('2/4', '8/4') === true)
  console.assert(simplify('2/4', '4/2') === true)
  console.assert(simplify('1/5', '5/1') === true)
  console.assert(simplify('1/5', '1/5') === false)
}

testSimplify()
