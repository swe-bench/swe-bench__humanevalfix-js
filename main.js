/*Your task is to write a function that returns true if a number x is a simple
  power of n and false in other cases.
  x is a simple power of n if n**int=x
  For example:
  isSimplePower(1, 4) => true
  isSimplePower(2, 2) => true
  isSimplePower(8, 2) => true
  isSimplePower(3, 2) => false
  isSimplePower(3, 1) => false
  isSimplePower(5, 3) => false
  */
const isSimplePower = (x, n) => {
  if (n == 1)
    return (x == 1);
  var power = 1;
  while (n < x)
    power = power * n;
  return (power == x);
}

const testIsSimplePower = () => {
  console.assert(isSimplePower(1, 4) === true)
  console.assert(isSimplePower(2, 2) === true)
  console.assert(isSimplePower(8, 2) === true)
  console.assert(isSimplePower(3, 2) === false)
  console.assert(isSimplePower(3, 1) === false)
  console.assert(isSimplePower(5, 3) === false)
}
testIsSimplePower()

module.exports = isSimplePower