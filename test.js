const evenOddPalindrome = require('./main');

const testEvenOddPalindrome = () => {
  console.assert(
    JSON.stringify(evenOddPalindrome(123)) === JSON.stringify((8, 13))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(12)) === JSON.stringify((4, 6))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(3)) === JSON.stringify((1, 2))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(63)) === JSON.stringify((6, 8))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(25)) === JSON.stringify((5, 6))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(19)) === JSON.stringify((4, 6))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(9)) === JSON.stringify((4, 5))
  )
  console.assert(
    JSON.stringify(evenOddPalindrome(1)) === JSON.stringify((0, 1))
  )
}

testEvenOddPalindrome()
