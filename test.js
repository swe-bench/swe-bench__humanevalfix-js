const wordsInSentence = require('./main');

const testWordsInSentence = () => {
  console.assert(wordsInSentence('This is a test') === 'is')
  console.assert(wordsInSentence('lets go for swimming') === 'go for')
  console.assert(
    wordsInSentence('there is no place available here') === 'there is no place'
  )
  console.assert(wordsInSentence('Hi I am Hussein') === 'Hi am Hussein')
  console.assert(wordsInSentence('go for it') === 'go for it')
  console.assert(wordsInSentence('here') === '')
  console.assert(wordsInSentence('here is') === 'is')
}

testWordsInSentence()
