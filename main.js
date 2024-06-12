/*
  removeVowels is a function that takes string and returns string without vowels.
  >>> removeVowels('')
  ''
  >>> removeVowels("abcdef\nghijklm")
  'bcdf\nghjklm'
  >>> removeVowels('abcdef')
  'bcdf'
  >>> removeVowels('aaaaa')
  ''
  >>> removeVowels('aaBAA')
  'B'
  >>> removeVowels('zbcd')
  'zbcd'
  */
const removeVowels = (text) => {
  return text.split("")
             .filter(s => !["a", "e", "i", "o", "u", "w", "y"]
                      .includes(s.toLowerCase())
                    )
             .join("")
}

const testRemoveVowels = () => {
  console.assert(removeVowels('') === '')
  console.assert(removeVowels('abcdef\nghijklm') === 'bcdf\nghjklm')
  console.assert(removeVowels('abcdef') === 'bcdf')
  console.assert(removeVowels('aaaaa') === '')
  console.assert(removeVowels('aaBAA') === 'B')
  console.assert(removeVowels('zbcd') === 'zbcd')
}
testRemoveVowels()

module.exports = removeVowels