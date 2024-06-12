const totalMatch = require('./main');

const testTotalMatch = () => {
  console.assert(JSON.stringify(totalMatch([], [])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(totalMatch(['hi', 'admin'], ['hi', 'hi'])) ===
      JSON.stringify(['hi', 'hi'])
  )
  console.assert(
    JSON.stringify(
      totalMatch(['hi', 'admin'], ['hi', 'hi', 'admin', 'project'])
    ) === JSON.stringify(['hi', 'admin'])
  )
  console.assert(
    JSON.stringify(totalMatch(['4'], ['1', '2', '3', '4', '5'])) ===
      JSON.stringify(['4'])
  )
  console.assert(
    JSON.stringify(totalMatch(['hi', 'admin'], ['hI', 'Hi'])) ===
      JSON.stringify(['hI', 'Hi'])
  )
  console.assert(
    JSON.stringify(totalMatch(['hi', 'admin'], ['hI', 'hi', 'hi'])) ===
      JSON.stringify(['hI', 'hi', 'hi'])
  )
  console.assert(
    JSON.stringify(totalMatch(['hi', 'admin'], ['hI', 'hi', 'hii'])) ===
      JSON.stringify(['hi', 'admin'])
  )
  console.assert(
    JSON.stringify(totalMatch([], ['this'])) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(totalMatch(['this'], [])) === JSON.stringify([])
  )
}

testTotalMatch()
