const isPalindrome = require('./main');

const testIsPalindrome = () => {
  console.assert(isPalindrome('') === true)
  console.assert(isPalindrome('aba') === true)
  console.assert(isPalindrome('aaaaa') === true)
  console.assert(isPalindrome('zbcd') === false)
  console.assert(isPalindrome('xywyx') === true)
  console.assert(isPalindrome('xywyz') === false)
  console.assert(isPalindrome('xywzx') === false)
}

testIsPalindrome()
