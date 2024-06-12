const intersection = require('./main');

const testIntersection = () => {
  console.assert(intersection([1, 2], [2, 3]) === 'NO')
  console.assert(intersection([-1, 1], [0, 4]) === 'NO')
  console.assert(intersection([-3, -1], [-5, 5]) === 'YES')
  console.assert(intersection([-2, 2], [-4, 0]) === 'YES')
  console.assert(intersection([-11, 2], [-1, -1]) === 'NO')
  console.assert(intersection([1, 2], [3, 5]) === 'NO')
  console.assert(intersection([1, 2], [1, 2]) === 'NO')
  console.assert(intersection([-2, -2], [-3, -2]) === 'NO')
}

testIntersection()
