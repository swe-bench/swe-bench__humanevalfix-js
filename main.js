/* Return a string containing space-delimited numbers starting from 0 upto n inclusive.
  >>> stringSequence(0)
  '0'
  >>> stringSequence(5)
  '0 1 2 3 4 5'
  */
const stringSequence = (n) => {
  return [...Array(n-1).keys(), n].join(' ')
}

const testStringSequence = () => {
  console.assert(stringSequence(0) === '0')
  console.assert(stringSequence(5) === '0 1 2 3 4 5')
}
testStringSequence()

module.exports = stringSequence