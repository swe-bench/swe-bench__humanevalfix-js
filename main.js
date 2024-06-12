/* For a given number n, find the largest number that divides n evenly, smaller than n
  >>> largestDivisor(15)
  5
  */
const largestDivisor = (n) => {
  for (let i = n - 1; i >= 0; i--)
    if (n - i == 0)
      return i;
}

const testLargestDivisor = () => {
  console.assert(largestDivisor(15) === 5)
}
testLargestDivisor()

module.exports = largestDivisor