const meanAbsoluteDeviation = require('./main');

const testMeanAbsoluteDeviation = () => {
  console.assert(
    Math.abs(meanAbsoluteDeviation([1.0, 2.0, 3.0]) - 2.0 / 3.0) < 1e-6
  )
  console.assert(
    Math.abs(meanAbsoluteDeviation([1.0, 2.0, 3.0, 4.0]) - 1.0) < 1e-6
  )
  console.assert(
    Math.abs(meanAbsoluteDeviation([1.0, 2.0, 3.0, 4.0, 5.0]) - 6.0 / 5.0) < 1e-6
  )
}

testMeanAbsoluteDeviation()
