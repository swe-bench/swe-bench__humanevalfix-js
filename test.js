const matchParens = require('./main');

const testMatchParens = () => {
  console.assert(matchParens(['()(', ')']) === 'Yes')
  console.assert(matchParens([')', ')']) === 'No')
  console.assert(matchParens(['(()(())', '())())']) === 'No')
  console.assert(matchParens([')())', '(()()(']) === 'Yes')
  console.assert(matchParens(['(())))', '(()())((']) === 'Yes')
  console.assert(matchParens(['()', '())']) === 'No')
  console.assert(matchParens(['(()(', '()))()']) === 'Yes')
  console.assert(matchParens(['((((', '((())']) === 'No')
  console.assert(matchParens([')(()', '(()(']) === 'No')
  console.assert(matchParens([')(', ')(']) === 'No')
  console.assert(matchParens(['(', ')']) === 'Yes')
  console.assert(matchParens([')', '(']) === 'Yes')
}
testMatchParens()
