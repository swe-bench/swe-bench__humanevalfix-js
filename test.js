const parseMusic = require('./main');

const testParseMusic = () => {
  console.assert(JSON.stringify(parseMusic('')) === JSON.stringify([]))
  console.assert(
    JSON.stringify(parseMusic('o o o o')) === JSON.stringify([4, 4, 4, 4])
  )
  console.assert(
    JSON.stringify(parseMusic('.| .| .| .|')) === JSON.stringify([1, 1, 1, 1])
  )
  console.assert(
    JSON.stringify(parseMusic('o| o| .| .| o o o o')) ===
      JSON.stringify([2, 2, 1, 1, 4, 4, 4, 4])
  )
  console.assert(
    JSON.stringify(parseMusic('o| .| o| .| o o| o o|')) ===
      JSON.stringify([2, 1, 2, 1, 4, 2, 4, 2])
  )
}

testParseMusic()
