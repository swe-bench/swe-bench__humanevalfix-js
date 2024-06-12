const removeVowels = require('./main');

const testRemoveVowels = () => {
  console.assert(removeVowels('') === '')
  console.assert(removeVowels('abcdef\nghijklm') === 'bcdf\nghjklm')
  console.assert(removeVowels('fedcba') === 'fdcb')
  console.assert(removeVowels('eeeee') === '')
  console.assert(removeVowels('acBAA') === 'cB')
  console.assert(removeVowels('EcBOO') === 'cB')
  console.assert(removeVowels('ybcd') === 'ybcd')
}

testRemoveVowels()
