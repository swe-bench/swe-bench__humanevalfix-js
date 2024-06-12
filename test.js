const getMaxTriples = require('./main');

const testGetMaxTriples = () => {
  console.assert(getMaxTriples(5) === 1)
  console.assert(getMaxTriples(6) === 4)
  console.assert(getMaxTriples(10) === 36)
  console.assert(getMaxTriples(100) === 53361)
}

testGetMaxTriples()
