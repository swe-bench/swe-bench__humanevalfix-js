const concatenate = require('./main');

const testConcatenate = () => {
  console.assert(concatenate([]) === '')
  console.assert(concatenate(['x', 'y', 'z']) === 'xyz')
  console.assert(concatenate(['x', 'y', 'z', 'w', 'k']) === 'xyzwk')
}

testConcatenate()
