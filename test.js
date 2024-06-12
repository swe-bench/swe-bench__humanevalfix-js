const stringSequence = require('./main');

const testStringSequence = () => {
  console.assert(stringSequence(0) === '0')
  console.assert(stringSequence(3) === '0 1 2 3')
  console.assert(stringSequence(10) === '0 1 2 3 4 5 6 7 8 9 10')
}

testStringSequence()
