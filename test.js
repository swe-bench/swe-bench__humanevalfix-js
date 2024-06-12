const getClosestVowel = require('./main');

const testGetClosestVowel = () => {
  console.assert(getClosestVowel('yogurt') === 'u')
  console.assert(getClosestVowel('full') === 'u')
  console.assert(getClosestVowel('easy') === '')
  console.assert(getClosestVowel('eAsy') === '')
  console.assert(getClosestVowel('ali') === '')
  console.assert(getClosestVowel('bad') === 'a')
  console.assert(getClosestVowel('most') === 'o')
  console.assert(getClosestVowel('ab') === '')
  console.assert(getClosestVowel('ba') === '')
  console.assert(getClosestVowel('quick') === '')
  console.assert(getClosestVowel('anime') === 'i')
  console.assert(getClosestVowel('Asia') === '')
  console.assert(getClosestVowel('Above') === 'o')
}

testGetClosestVowel()
