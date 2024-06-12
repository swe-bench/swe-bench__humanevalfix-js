const fixSpaces = require('./main');

const testFixSpaces = () => {
  console.assert(fixSpaces('Example') === 'Example')
  console.assert(fixSpaces('Mudasir Hanif ') === 'Mudasir_Hanif_')
  console.assert(
    fixSpaces('Yellow Yellow  Dirty  Fellow') === 'Yellow_Yellow__Dirty__Fellow'
  )
  console.assert(fixSpaces('Exa   mple') === 'Exa-mple')
  console.assert(fixSpaces('   Exa 1 2 2 mple') === '-Exa_1_2_2_mple')
}

testFixSpaces()
