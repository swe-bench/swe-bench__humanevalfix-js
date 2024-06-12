/* Input are two strings a and b consisting only of 1s and 0s.
  Perform binary XOR on these inputs and return result also as a string.
  >>> stringXor('010', '110')
  '100'
  */
const stringXor = (a, b) => {
  var xor = function (i, j) {
    if (i == j)
      return '1';
    else
      return '0';
  }
  return a.split('').map((item, index) => xor(item, b[index])).join('');
}

const testStringXor = () => {
  console.assert(stringXor('010', '110') === '100')
}
testStringXor()

module.exports = stringXor