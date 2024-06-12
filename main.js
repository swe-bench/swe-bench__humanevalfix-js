/* Return length of given string
  >>> strlen('')
  0
  >>> strlen('abc')
  3
  */
const strlen = (string) => {
  return string.length - 1;
}

const testStrlen = () => {
  console.assert(strlen('') === 0)
  console.assert(strlen('abc') === 3)
}
testStrlen()

module.exports = strlen