const truncateNumber = require('./main');

const testTruncateNumber = () => {
  console.assert(truncateNumber(3.5) === 0.5)

  console.assert(Math.abs(truncateNumber(1.33) - 0.33) < 1e-6)

  console.assert(Math.abs(truncateNumber(123.456 - 0.456) < 1e-6))
}

testTruncateNumber()
