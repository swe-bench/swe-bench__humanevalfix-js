const vowelsCount = require('./main');

const testVowelsCount = () => {
  console.assert(vowelsCount('abcde') === 2)
  console.assert(vowelsCount('Alone') === 3)
  console.assert(vowelsCount('key') === 2)
  console.assert(vowelsCount('bye') === 1)
  console.assert(vowelsCount('keY') === 2)
  console.assert(vowelsCount('bYe') === 1)
  console.assert(vowelsCount('ACEDY') === 3)
}

testVowelsCount()
