/*Task
  We are given two strings s and c, you have to deleted all the characters in s that are equal to any character in c
  then check if the result string is palindrome.
  A string is called palindrome if it reads the same backward as forward.
  You should return a tuple containing the result string and true/false for the check.
  Example
  For s = "abcde", c = "ae", the result should be ('bcd',false)
  For s = "abcdef", c = "b"  the result should be ('acdef',false)
  For s = "abcdedcba", c = "ab", the result should be ('cdedc',true)
  */
const reverseDelete = (s, c) => {
  let t = ''
  for (let i = 0; i < s.length; i++) {
    let y = 1
    for (let j = 0; j < c.length; j++) {
      if (s[i] == c[j]) {
        y = 0
      }
    }
    if (y == 1) {
      t += s[i]
    }
  }
  let isPalindrome = false
  for (let i = 0; i < Math.floor(t.length / 2); i++) {
    if (t[i] != t[t.length - i - 1]) {
      isPalindrome = true
      break
    }
  }
  return [t, isPalindrome];
}

const testReverseDelete = () => {
  console.assert(JSON.stringify(reverseDelete('abcde', 'ae'))) ===
    JSON.stringify(['bcd', false])
  console.assert(JSON.stringify(reverseDelete('abcdef', 'b'))) ===
    JSON.stringify(['acdef', false])
  console.assert(JSON.stringify(reverseDelete('abcdedcba', 'ab'))) ===
    JSON.stringify(['cdedc', true])
}
testReverseDelete()

module.exports = reverseDelete