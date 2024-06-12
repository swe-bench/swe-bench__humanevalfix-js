const howManyTimes = require('./main');

const testHowManyTimes = () => {
  console.assert(howManyTimes('', 'x') === 0)
  console.assert(howManyTimes('xyxyxyx', 'x') === 4)
  console.assert(howManyTimes('cacacacac', 'cac') === 4)
  console.assert(howManyTimes('john doe', 'john') === 1)
}

testHowManyTimes()
