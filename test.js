const separateParenGroups = require('./main');

const testSeparateParenGroups = () => {
  console.assert(
    JSON.stringify(separateParenGroups('(()()) ((())) () ((())()())')) ===
      JSON.stringify(['(()())', '((()))', '()', '((())()())'])
  )
  console.assert(
    JSON.stringify(separateParenGroups('() (()) ((())) (((())))')) ===
      JSON.stringify(['()', '(())', '((()))', '(((())))'])
  )
  console.assert(
    JSON.stringify(separateParenGroups('(()(())((())))')) ===
      JSON.stringify(['(()(())((())))'])
  )
  console.assert(
    JSON.stringify(separateParenGroups('( ) (( )) (( )( ))')) ===
      JSON.stringify(['()', '(())', '(()())'])
  )
}

testSeparateParenGroups()
