const smallestChange = require('./main');

const testSmallestChange = () => {
  console.assert(smallestChange([1, 2, 3, 5, 4, 7, 9, 6]) === 4)
  console.assert(smallestChange([1, 2, 3, 4, 3, 2, 2]) === 1)
  console.assert(smallestChange([1, 4, 2]) === 1)
  console.assert(smallestChange([1, 4, 4, 2]) === 1)
  console.assert(smallestChange([1, 2, 3, 2, 1]) === 0)
  console.assert(smallestChange([3, 1, 1, 3]) === 0)
  console.assert(smallestChange([1]) === 0)
  console.assert(smallestChange([0, 1]) === 1)
}

testSmallestChange()
