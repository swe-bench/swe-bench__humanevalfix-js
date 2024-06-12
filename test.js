const bf = require('./main');

const testBf = () => {
  console.assert(
    JSON.stringify(bf('Jupiter', 'Neptune')) ===
    JSON.stringify(['Saturn', 'Uranus'])
  )
  console.assert(
    JSON.stringify(bf('Earth', 'Mercury')) === JSON.stringify(['Venus'])
  )
  console.assert(
    JSON.stringify(bf('Mercury', 'Uranus')) ===
    JSON.stringify(['Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'])
  )
  console.assert(
    JSON.stringify(bf('Neptune', 'Venus')) ===
    JSON.stringify(['Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus'])
  )
  console.assert(JSON.stringify(bf('Earth', 'Earth')) === JSON.stringify([]))
  console.assert(JSON.stringify(bf('Mars', 'Earth')) === JSON.stringify([]))
  console.assert(
    JSON.stringify(bf('Jupiter', 'Makemake')) === JSON.stringify([])
  )
}

testBf()
