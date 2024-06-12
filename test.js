const wordsString = require('./main');

const testWordsString = () => {
  console.assert(
    JSON.stringify(wordsString('Hi, my name is John')) ===
    JSON.stringify(['Hi', 'my', 'name', 'is', 'John'])
  )
  console.assert(
    JSON.stringify(wordsString('One, two, three, four, five, six')) ===
    JSON.stringify(['One', 'two', 'three', 'four', 'five', 'six'])
  )
  console.assert(
    JSON.stringify(wordsString('Hi, my name')) ===
    JSON.stringify(['Hi', 'my', 'name'])
  )
  console.assert(
    JSON.stringify(wordsString('One,, two, three, four, five, six,')) ===
    JSON.stringify(['One', 'two', 'three', 'four', 'five', 'six'])
  )
  console.assert(JSON.stringify(wordsString('')) === JSON.stringify([]))
  console.assert(
    JSON.stringify(wordsString('ahmed     , gamal')) ===
    JSON.stringify(['ahmed', 'gamal'])
  )
}

testWordsString()
