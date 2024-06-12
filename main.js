/*Return median of elements in the list l.
  >>> median([3, 1, 2, 4, 5])
  3
  >>> median([-10, 4, 6, 1000, 10, 20])
  8.0
  */
const median = (l) => {
  l.sort((a, b) => a - b);
  var len = l.length;
  if (l.length % 2 == 1)
    return l[Math.floor(len / 2)];
  else
    return (l[len - 1 / 2] + l[len / 2]) / 2.0;
}

const testMedian = () => {
  console.assert(median([3, 1, 2, 4, 5]) === 3)
  console.assert(median([-10, 4, 6, 1000, 10, 20]) === 8.0)
}
testMedian()

module.exports = median