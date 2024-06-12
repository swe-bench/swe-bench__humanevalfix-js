const startsOneEnds = require('./main');

const testStartsOneEnds = () => {
  console.assert(startsOneEnds(1) === 1)
  console.assert(startsOneEnds(2) === 18)
  console.assert(startsOneEnds(3) === 180)
  console.assert(startsOneEnds(4) === 1800)
  console.assert(startsOneEnds(5) === 18000)
}

testStartsOneEnds()
