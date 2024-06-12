const exchange = require('./main');

const testExchange = () => {
  console.assert(exchange([1, 2, 3, 4], [1, 2, 3, 4]) === 'YES')
  console.assert(exchange([1, 2, 3, 4], [1, 5, 3, 4]) === 'NO')
  console.assert(exchange([1, 2, 3, 4], [2, 1, 4, 3]) === 'YES')
  console.assert(exchange([5, 7, 3], [2, 6, 4]) === 'YES')
  console.assert(exchange([5, 7, 3], [2, 6, 3]) === 'NO')
  console.assert(exchange([3, 2, 6, 1, 8, 9], [3, 5, 5, 1, 1, 1]) === 'NO')
  console.assert(exchange([100, 200], [200, 200]) === 'YES')
}

testExchange()
