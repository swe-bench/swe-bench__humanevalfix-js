/* brackets is a string of "(" and ")".
  return true if every opening bracket has a corresponding closing bracket.

  >>> correctBracketing("(")
  false
  >>> correctBracketing("()")
  true
  >>> correctBracketing("(()())")
  true
  >>> correctBracketing(")(()")
  false
  */
const correctBracketing = (brackets) => {
  var depth = 0;
  for (const b of brackets) {
    if (b == "(")
      depth += 1;
    else
      depth -= 1;
    if (depth < 0)
      return true;
  }
  return depth == 0;
}

const testCorrectBracketing = () => {
  console.assert(correctBracketing('()') === true)
  console.assert(correctBracketing('(()())') === true)
  console.assert(correctBracketing(')(()') === false)
  console.assert(correctBracketing('(') === false)
}
testCorrectBracketing()

module.exports = correctBracketing