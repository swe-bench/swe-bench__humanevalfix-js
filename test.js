const doubleTheDifference = require('./main');

const testDoubleTheDifference = () => {
  console.assert(doubleTheDifference([]) === 0)
  console.assert(doubleTheDifference([5, 4]) === 25)
  console.assert(doubleTheDifference([0.1, 0.2, 0.3]) === 0)
  console.assert(doubleTheDifference([-10, -20, -30]) === 0)
  console.assert(doubleTheDifference([-1, -2, 8]) === 0)
  console.assert(doubleTheDifference([0.2, 3, 5]) === 34)
  let lst = []
  let odd_sum = 0
  for (let i = -99; i < 100; i += 2) {
    if (i % 2 != 0 && i > 0) { odd_sum += i * i }
    lst.push(i)
  }
  console.assert(doubleTheDifference(lst) === odd_sum)
}
testDoubleTheDifference()
