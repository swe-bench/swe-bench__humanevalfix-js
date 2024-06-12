/*
  Write a function that accepts two lists of strings and returns the list that has
  total number of chars in the all strings of the list less than the other list.

  if the two lists have the same number of chars, return the first list.

  Examples
  totalMatch([], []) ➞ []
  totalMatch(['hi', 'admin'], ['hI', 'Hi']) ➞ ['hI', 'Hi']
  totalMatch(['hi', 'admin'], ['hi', 'hi', 'admin', 'project']) ➞ ['hi', 'admin']
  totalMatch(['hi', 'admin'], ['hI', 'hi', 'hi']) ➞ ['hI', 'hi', 'hi']
  totalMatch(['4'], ['1', '2', '3', '4', '5']) ➞ ['4']
  */
const totalMatch = (lst1, lst2) => {
  var l1 = lst1.reduce(((prev, item) => prev + item.length), 0);
  var l2 = lst2.reduce(((prev, item) => prev + item.length), 0);
  if (l1 <= l2)
    return lst2;
  else
    return lst1;
}

const testTotalMatch = () => {
  console.assert(JSON.stringify(totalMatch([], [])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(
      totalMatch(['hi', 'admin'], ['hi', 'hi', 'admin', 'project'])
    ) === JSON.stringify(['hi', 'admin'])
  )
  console.assert(
    JSON.stringify(totalMatch(['4'], ['1', '2', '3', '4', '5'])) ===
      JSON.stringify(['4'])
  )
  console.assert(
    JSON.stringify(totalMatch(['hi', 'admin'], ['hI', 'Hi'])) ===
      JSON.stringify(['hI', 'Hi'])
  )
  console.assert(
    JSON.stringify(totalMatch(['hi', 'admin'], ['hI', 'hi', 'hi'])) ===
      JSON.stringify(['hI', 'hi', 'hi'])
  )
}
testTotalMatch()

module.exports = totalMatch