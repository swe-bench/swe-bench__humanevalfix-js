const solution = require('./main');

const testSolution = () => {
  console.assert(solution([5, 8, 7, 1]) === 12)
  console.assert(solution([3, 3, 3, 3, 3]) === 9)
  console.assert(solution([30, 13, 24, 321]) === 0)
  console.assert(solution([5, 9]) === 5)
  console.assert(solution([2, 4, 8]) === 0)
  console.assert(solution([30, 13, 23, 32]) === 23)
  console.assert(solution([3, 13, 2, 9]) === 3)
}

testSolution()
