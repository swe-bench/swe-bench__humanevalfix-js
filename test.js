const encrypt = require('./main');

const testEncrypt = () => {
  console.assert(encrypt('hi') === 'lm')
  console.assert(encrypt('asdfghjkl') === 'ewhjklnop')
  console.assert(encrypt('gf') === 'kj')
  console.assert(encrypt('et') === 'ix')
  console.assert(encrypt('faewfawefaewg') === 'jeiajeaijeiak')
  console.assert(encrypt('hellomyfriend') === 'lippsqcjvmirh')
  console.assert(
    encrypt('dxzdlmnilfuhmilufhlihufnmlimnufhlimnufhfucufh') ===
    'hbdhpqrmpjylqmpyjlpmlyjrqpmqryjlpmqryjljygyjl'
  )
  console.assert(encrypt('a') === 'e')
}

testEncrypt()
