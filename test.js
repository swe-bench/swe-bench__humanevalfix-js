const parseNestedParens = require('./main');

const testParseNestedParens = () => {
  console.assert(
    JSON.stringify(parseNestedParens('(()()) ((())) () ((())()())')) ===
      JSON.stringify([2, 3, 1, 3])
  )
  console.assert(
    JSON.stringify(parseNestedParens('() (()) ((())) (((())))')) ===
      JSON.stringify([1, 2, 3, 4])
  )
  console.assert(
    JSON.stringify(parseNestedParens('(()(())((())))')) === JSON.stringify([4])
  )
}

testParseNestedParens()
