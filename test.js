const numericalLetterGrade = require('./main');

const testNumericalLetterGrade = () => {
  console.assert(
    JSON.stringify(numericalLetterGrade([4.0, 3, 1.7, 2, 3.5])) ===
    JSON.stringify(['A+', 'B', 'C-', 'C', 'A-'])
  )
  console.assert(
    JSON.stringify(numericalLetterGrade([1.2])) === JSON.stringify(['D+'])
  )
  console.assert(
    JSON.stringify(numericalLetterGrade([0.5])) === JSON.stringify(['D-'])
  )
  console.assert(
    JSON.stringify(numericalLetterGrade([0.0])) === JSON.stringify(['E'])
  )
  console.assert(
    JSON.stringify(numericalLetterGrade([1, 0.3, 1.5, 2.8, 3.3])) ===
    JSON.stringify(['D', 'D-', 'C-', 'B', 'B+'])
  )
  console.assert(
    JSON.stringify(numericalLetterGrade([0, 0.7])) ===
    JSON.stringify(['E', 'D-'])
  )
}

testNumericalLetterGrade()
