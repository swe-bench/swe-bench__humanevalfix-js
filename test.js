const isBored = require('./main');

const testIsBored = () => {
  console.assert(isBored('Hello world') === 0)
  console.assert(isBored('Is the sky blue?') === 0)
  console.assert(isBored('I love It !') === 1)
  console.assert(isBored('bIt') === 0)
  console.assert(
    isBored('I feel good today. I will be productive. will kill It') === 2
  )
  console.assert(isBored('You and I are going for a walk') === 0)
}

testIsBored()
