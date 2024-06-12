/* Find how many times a given substring can be found in the original string. Count overlaping cases.
  >>> howManyTimes('', 'a')
  0
  >>> howManyTimes('aaa', 'a')
  3
  >>> howManyTimes('aaaa', 'aa')
  3
  */
const howManyTimes = (string, substring) => {
  var times = 0;
  for (let i = 0; i < string.length - substring.length; i++) {
    if (string.slice(i, i+substring.length) == substring) {
      times += 1;
    }
  }
  return times;
}

const testHowManyTimes = () => {
  console.assert(howManyTimes('', 'a') === 0)
  console.assert(howManyTimes('aaa', 'a') === 3)
  console.assert(howManyTimes('aaaa', 'aa') === 3)
}
testHowManyTimes()

module.exports = howManyTimes