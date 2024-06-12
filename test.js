const strlen = require('./main');

const testStrlen = () => {
  console.assert(strlen('') === 0)
  console.assert(strlen('x') === 1)
  console.assert(strlen('asdasnakj') === 9)
}

testStrlen()
