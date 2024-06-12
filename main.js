/* Return a greatest common divisor of two integers a and b
  >>> greatestCommonDivisor(3, 5)
  1
  >>> greatestCommonDivisor(25, 15)
  5
  */
const greatestCommonDivisor = (a, b) => {
  while (b != 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return b;
}

const testGreatestCommonDivisor = () => {
  console.assert(greatestCommonDivisor(3, 5) === 1)
  console.assert(greatestCommonDivisor(25, 15) === 5)
}
testGreatestCommonDivisor()

module.exports = greatestCommonDivisor