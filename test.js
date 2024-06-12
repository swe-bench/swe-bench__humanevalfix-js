const flipCase = require('./main');

const testFlipCase = () => {
  console.assert(flipCase('') === '')
  console.assert(flipCase('Hello!') === 'hELLO!')
  console.assert(
    flipCase(
      'These violent delights have violent ends') ===
        'tHESE VIOLENT DELIGHTS HAVE VIOLENT ENDS'
  )
}

testFlipCase()
