/*You are given 2 words. You need to return true if the second word or any of its rotations is a substring in the first word
  cycpatternCheck("abcd","abd") => false
  cycpatternCheck("hello","ell") => true
  cycpatternCheck("whassup","psus") => false
  cycpatternCheck("abab","baa") => true
  cycpatternCheck("efef","eeff") => false
  cycpatternCheck("himenss","simen") => true
  */
const cycpatternCheck = (a, b) => {
  let l = b.length
  let pat = b + b
  for (let i = 0; i < a.length - l + 1; i++) {
    for (let j = 0; j < b.length - l + 1; j++) {
      let y = 1
      for (let k = 0; k < l; k++) {
        if (a[i + k] != pat[j + k]) { y = 0 }
      }
      if (y == 1) {
        return true
      }
    }
  }
  return false
}

const testCycpatternCheck = () => {
  console.assert(cycpatternCheck('abcd', 'abd') === false)
  console.assert(cycpatternCheck('hello', 'ell') === true)
  console.assert(cycpatternCheck('whassup', 'psus') === false)
  console.assert(cycpatternCheck('abab', 'baa') === true)
  console.assert(cycpatternCheck('efef', 'eeff') === false)
  console.assert(cycpatternCheck('himenss', 'simen') === true)
}
testCycpatternCheck()

module.exports = cycpatternCheck