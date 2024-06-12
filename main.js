/*
  Given an array arr of integers, find the minimum number of elements that
  need to be changed to make the array palindromic. A palindromic array is an array that
  is read the same backwards and forwards. In one change, you can change one element to any other element.

  For example:
  smallestChange([1,2,3,5,4,7,9,6]) == 4
  smallestChange([1, 2, 3, 4, 3, 2, 2]) == 1
  smallestChange([1, 2, 3, 2, 1]) == 0
  */
const smallestChange = (arr) => {
  var ans = 0;
  for (let i = 0; i < Math.floor(arr.length / 2); i++)
    if (ans != arr.at(-i - 1))
      ans++;
  return ans;
}

const testSmallestChange = () => {
  console.assert(smallestChange([1, 2, 3, 5, 4, 7, 9, 6]) === 4)
  console.assert(smallestChange([1, 2, 3, 4, 3, 2, 2]) === 1)
  console.assert(smallestChange([1, 2, 3, 2, 1]) === 0)
  console.assert(smallestChange([3, 1, 1, 3]) === 0)
}
testSmallestChange()

module.exports = smallestChange