const checkDictCase = require('./main');

const testCheckDictCase = () => {
  console.assert(checkDictCase({ p: 'pineapple', b: 'banana' }) === true)
  console.assert(
    checkDictCase({ p: 'pineapple', A: 'banana', B: 'banana' }) === false
  )
  console.assert(
    checkDictCase({ p: 'pineapple', 5: 'banana', a: 'apple' }) === false
  )
  console.assert(
    checkDictCase({ Name: 'John', Age: '36', City: 'Houston' }) === false
  )
  console.assert(checkDictCase({ STATE: 'NC', ZIP: '12345' }) === true)
  console.assert(checkDictCase({ fruit: 'Orange', taste: 'Sweet' }) === true)
  console.assert(checkDictCase({}) === false)
}

testCheckDictCase()
