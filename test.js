const correctBracketing = require('./main');

const testCorrectBracketing = () => {
  console.assert(correctBracketing('()') === true)
  console.assert(correctBracketing('(()())') === true)
  console.assert(correctBracketing('()()(()())()') === true)
  console.assert(correctBracketing('()()((()()())())(()()(()))') === true)
  console.assert(correctBracketing('((()())))') === false)
  console.assert(correctBracketing(')(()') === false)
  console.assert(correctBracketing('(') === false)
  console.assert(correctBracketing('((((') === false)
  console.assert(correctBracketing(')') === false)
  console.assert(correctBracketing('(()') === false)
  console.assert(correctBracketing('()()(()())())(()') === false)
  console.assert(correctBracketing('()()(()())()))()') === false)
}

testCorrectBracketing()
