const decodeShift = require('./main');

const testDecodeShift = () => {
    const letters = new Array(26)
    .fill(null)
    .map((v, i) => String.fromCharCode(97 + i))

    for (let i = 0; i < 100; i++) {
      let str = new Array(Math.floor(Math.random() * 20)).fill(null);
      str = str.map(item => letters[Math.floor(Math.random() * letters.length)]).join('');
      let encoded_str = encodeShift(str)
      console.assert(decodeShift(encoded_str) === str)
    }

}

testDecodeShift()
