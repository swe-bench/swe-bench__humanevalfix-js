const moveOneBall = require('./main');

const testMoveOneBall = () => {
  console.assert(moveOneBall([3, 4, 5, 1, 2]) === true)
  console.assert(moveOneBall([3, 5, 10, 1, 2]) === true)
  console.assert(moveOneBall([4, 3, 1, 2]) === false)
  console.assert(moveOneBall([3, 5, 4, 1, 2]) === false)
  console.assert(moveOneBall([]) === true)
}

testMoveOneBall()
