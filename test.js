const sameChars = require('./main');

const testSameChars = () => {
  console.assert(sameChars('eabcdzzzz', 'dddzzzzzzzddeddabc') === true)
  console.assert(sameChars('abcd', 'dddddddabc') === true)
  console.assert(sameChars('dddddddabc', 'abcd') === true)
  console.assert(sameChars('eabcd', 'dddddddabc') === false)
  console.assert(sameChars('abcd', 'dddddddabcf') === false)
  console.assert(sameChars('eabcdzzzz', 'dddzzzzzzzddddabc') === false)
  console.assert(sameChars('aabb', 'aaccc') === false)
}

testSameChars()
