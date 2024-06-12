/* For a given string, flip lowercase characters to uppercase and uppercase to lowercase.
  >>> flipCase('Hello')
  'hELLO'
  */
const flipCase = (string) => {
  return string.split('')
          .map(x => (x.toLowerCase() == x ? x.toLowerCase() : x.toUpperCase()))
          .join('');
}

const testFlipCase = () => {
  console.assert(flipCase('Hello') === 'hELLO')
}
testFlipCase()

module.exports = flipCase