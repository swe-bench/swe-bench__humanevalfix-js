const countDistinctCharacters = require('./main');

const testCountDistinctCharacters = () => {
  console.assert(countDistinctCharacters('') === 0)
  console.assert(countDistinctCharacters('abcde') === 5)
  console.assert(countDistinctCharacters('abcde' + 'cade' + 'CADE') === 5)
  console.assert(countDistinctCharacters('aaaaAAAAaaaa') === 1)
  console.assert(countDistinctCharacters('Jerry jERRY JeRRRY') === 5)
}

testCountDistinctCharacters()
