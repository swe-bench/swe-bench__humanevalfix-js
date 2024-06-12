const antiShuffle = require('./main');

const testAntiShuffle = () => {
  console.assert(antiShuffle('Hi') === 'Hi')
  console.assert(antiShuffle('hello') === 'ehllo')
  console.assert(antiShuffle('number') === 'bemnru')
  console.assert(antiShuffle('abcd') === 'abcd')
  console.assert(antiShuffle('Hello World!!!') === 'Hello !!!Wdlor')
  console.assert(antiShuffle('') === '')
  console.assert(
    antiShuffle('Hi. My name is Mister Robot. How are you?') ===
    '.Hi My aemn is Meirst .Rboot How aer ?ouy'
  )
}

testAntiShuffle()
