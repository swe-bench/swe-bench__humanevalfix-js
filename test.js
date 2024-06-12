const encode = require('./main');

const testEncode = () => {
  console.assert(encode('TEST') === 'tgst')
  console.assert(encode('Mudasir') === 'mWDCSKR')
  console.assert(encode('YES') === 'ygs')
  console.assert(encode('This is a message') === 'tHKS KS C MGSSCGG')
  console.assert(
    encode('I DoNt KnOw WhAt tO WrItE') === 'k dQnT kNqW wHcT Tq wRkTg'
  )
}

testEncode()
