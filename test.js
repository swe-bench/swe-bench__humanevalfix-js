const fruitDistribution = require('./main');

const testFruitDistribution = () => {
  console.assert(fruitDistribution('5 apples and 6 oranges', 19) === 8)
  console.assert(fruitDistribution('5 apples and 6 oranges', 21) === 10)
  console.assert(fruitDistribution('0 apples and 1 oranges', 3) === 2)
  console.assert(fruitDistribution('1 apples and 0 oranges', 3) === 2)
  console.assert(fruitDistribution('2 apples and 3 oranges', 100) === 95)
  console.assert(fruitDistribution('2 apples and 3 oranges', 5) === 0)
  console.assert(fruitDistribution('1 apples and 100 oranges', 120) === 19)
}

testFruitDistribution()
