const intToMiniRoman = require('./main');

const testIntToMiniRoman = () => {
  console.assert(intToMiniRoman(19) === 'xix')
  console.assert(intToMiniRoman(152) === 'clii')
  console.assert(intToMiniRoman(251) === 'ccli')
  console.assert(intToMiniRoman(426) === 'cdxxvi')
  console.assert(intToMiniRoman(500) === 'd')
  console.assert(intToMiniRoman(1) === 'i')
  console.assert(intToMiniRoman(4) === 'iv')
  console.assert(intToMiniRoman(43) === 'xliii')
  console.assert(intToMiniRoman(90) === 'xc')
  console.assert(intToMiniRoman(94) === 'xciv')
  console.assert(intToMiniRoman(532) === 'dxxxii')
  console.assert(intToMiniRoman(900) === 'cm')
  console.assert(intToMiniRoman(994) === 'cmxciv')
  console.assert(intToMiniRoman(1000) === 'm')
}

testIntToMiniRoman()
