/*Given an integer. return a tuple that has the number of even and odd digits respectively.

   Example:
      evenOddCount(-12) ==> (1, 1)
      evenOddCount(123) ==> (1, 2)
  */
const evenOddCount = (num) => {
  let o = 0
  let e = 0
  if (num < 0) { num = -num }
  while (num > 0) {
    if (num % 2 == 0) { e++ }
    else { o++ }
    num = num - num % 10
  }
  return (e, o)
}

const testEvenOddCount = () => {
  console.assert(JSON.stringify(evenOddCount(-12)) === JSON.stringify((1, 1)))
  console.assert(JSON.stringify(evenOddCount(123)) === JSON.stringify((1, 2)))
}
testEvenOddCount()

module.exports = evenOddCount