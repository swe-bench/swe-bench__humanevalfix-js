const histogram = require('./main');

const testHistogram = () => {
  console.assert(
    JSON.stringify(histogram('a b b a')) === JSON.stringify({ a: 2, b: 2 })
  )
  console.assert(
    JSON.stringify(histogram('a b c a b')) === JSON.stringify({ a: 2, b: 2 })
  )
  console.assert(
    JSON.stringify(histogram('a b c d g')) ===
    JSON.stringify({ a: 1, b: 1, c: 1, d: 1, g: 1 })
  )
  console.assert(
    JSON.stringify(histogram('r t g')) === JSON.stringify({ r: 1, t: 1, g: 1 })
  )
  console.assert(
    JSON.stringify(histogram('b b b b a')) === JSON.stringify({ b: 4 })
  )
  console.assert(
    JSON.stringify(histogram('r t g')) === JSON.stringify({ r: 1, t: 1, g: 1 })
  )
  console.assert(JSON.stringify(histogram('')) === JSON.stringify({}))
  console.assert(JSON.stringify(histogram('a')) === JSON.stringify({ a: 1 }))
}

testHistogram()
