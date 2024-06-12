const checkIfLastCharIsALetter = require('./main');

const testCheckIfLastCharIsALetter = () => {
  console.assert(checkIfLastCharIsALetter('apple') === false)
  console.assert(checkIfLastCharIsALetter('apple pi e') === true)
  console.assert(checkIfLastCharIsALetter('eeeee') === false)
  console.assert(checkIfLastCharIsALetter('A') === true)
  console.assert(checkIfLastCharIsALetter('Pumpkin pie ') === false)
  console.assert(checkIfLastCharIsALetter('Pumpkin pie 1') === false)
  console.assert(checkIfLastCharIsALetter('') === false)
  console.assert(checkIfLastCharIsALetter('eeeee e ') === false)
  console.assert(checkIfLastCharIsALetter('apple pie') === false)
  console.assert(checkIfLastCharIsALetter('apple pi e ') === false)
}

testCheckIfLastCharIsALetter()
