const reverseDelete = require('./main');

const testReverseDelete = () => {
  console.assert(JSON.stringify(reverseDelete('abcde', 'ae')) ===
    JSON.stringify(['bcd', false]))
  console.assert(JSON.stringify(reverseDelete('abcdef', 'b')) ===
    JSON.stringify(['acdef', false]))
  console.assert(JSON.stringify(reverseDelete('abcdedcba', 'ab')) ===
    JSON.stringify(['cdedc', true]))
  console.assert(JSON.stringify(reverseDelete('dwik', 'w')) ===
    JSON.stringify(['dik', false]))
  console.assert(JSON.stringify(reverseDelete('a', 'a')) ===
    JSON.stringify(['', true]))
  console.assert(JSON.stringify(reverseDelete('abcdedcba', '')) ===
    JSON.stringify(['abcdedcba', true]))
  console.assert(JSON.stringify(reverseDelete('abcdedcba', 'v')) ===
    JSON.stringify(['abcdedcba', true]))
  console.assert(JSON.stringify(reverseDelete('vabba', 'v')) ===
    JSON.stringify(['abba', true]))
  console.assert(JSON.stringify(reverseDelete('mamma', 'mia')) ===
    JSON.stringify(['', true]))
}

testReverseDelete()
