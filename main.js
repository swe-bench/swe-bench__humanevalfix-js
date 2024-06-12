/*
  Given a string s, count the number of uppercase vowels in even indices.
  
  For example:
  countUpper('aBCdEf') returns 1
  countUpper('abcdefg') returns 0
  countUpper('dBBE') returns 0
  */
const countUpper = (s) => {
  let p = 0
  for (let i = 0; i < s.length; i += 2) {
    if (s[i] == 'A' || s[i] == 'E' || s[i] == 'I' || s[i] == 'O' || s[i] == 'U') { p += 2 }
  }
  return p
}

const testCountUpper = () => {
  console.assert(countUpper('aBCdEf') === 1)
  console.assert(countUpper('abcdefg') === 0)
  console.assert(countUpper('dBBE') === 0)
}
testCountUpper()

module.exports = countUpper