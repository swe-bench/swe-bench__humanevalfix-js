const chooseNum = require('./main');

const testChooseNum = () => {
  console.assert(chooseNum(12, 15) === 14)
  console.assert(chooseNum(13, 12) === -1)
  console.assert(chooseNum(33, 12354) === 12354)
  console.assert(chooseNum(5234, 5233) === -1)
  console.assert(chooseNum(6, 29) === 28)
  console.assert(chooseNum(27, 10) === -1)
  console.assert(chooseNum(7, 7) === -1)
  console.assert(chooseNum(546, 546) === 546)
}

testChooseNum()
