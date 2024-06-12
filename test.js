const uniqueDigits = require('./main');

const testUniqueDigits = () => {
  console.assert(
    JSON.stringify(uniqueDigits([15, 33, 1422, 1])) ===
    JSON.stringify([1, 15, 33])
  )
  console.assert(
    JSON.stringify(uniqueDigits([152, 323, 1422, 10])) === JSON.stringify([])
  )
  console.assert(
    JSON.stringify(uniqueDigits([12345, 2033, 111, 151])) ===
    JSON.stringify([111, 151])
  )
  console.assert(
    JSON.stringify(uniqueDigits([135, 103, 31])) === JSON.stringify([31, 135])
  )
}

testUniqueDigits()
