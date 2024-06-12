const strongestExtension = require('./main');

const testStrongestExtension = () => {
  console.assert(
    strongestExtension('Watashi', ['tEN', 'niNE', 'eIGHt8OKe']) ===
    'Watashi.eIGHt8OKe'
  )
  console.assert(
    strongestExtension('Boku123', [
      'nani',
      'NazeDa',
      'YEs.WeCaNe',
      '32145tggg',
    ]) === 'Boku123.YEs.WeCaNe'
  )
  console.assert(
    strongestExtension('__YESIMHERE', [
      't',
      'eMptY',
      'nothing',
      'zeR00',
      'NuLl__',
      '123NoooneB321',
    ]) === '__YESIMHERE.NuLl__'
  )
  console.assert(
    strongestExtension('K', ['Ta', 'TAR', 't234An', 'cosSo']) === 'K.TAR'
  )
  console.assert(
    strongestExtension('__HAHA', ['Tab', '123', '781345', '-_-']) ===
    '__HAHA.123'
  )
  console.assert(
    strongestExtension('YameRore', [
      'HhAas',
      'okIWILL123',
      'WorkOut',
      'Fails',
      '-_-',
    ]) === 'YameRore.okIWILL123'
  )
  console.assert(
    strongestExtension('finNNalLLly', ['Die', 'NowW', 'Wow', 'WoW']) ===
    'finNNalLLly.WoW'
  )
  console.assert(strongestExtension('_', ['Bb', '91245']) === '_.Bb')
  console.assert(strongestExtension('Sp', ['671235', 'Bb']) === 'Sp.671235')
}

testStrongestExtension()
