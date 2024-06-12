const makePalindrome = require('./main');

const testmakePalindrome = () => {
  console.assert(makePalindrome('') === '')
  console.assert(makePalindrome('x') === 'x')
  console.assert(makePalindrome('xyz') === 'xyzyx')
  console.assert(makePalindrome('xyx') === 'xyx')
  console.assert(makePalindrome('jerry') === 'jerryrrej')
}

testmakePalindrome()
