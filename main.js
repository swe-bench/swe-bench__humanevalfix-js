/*Everyone knows Fibonacci sequence, it was studied deeply by mathematicians in 
  the last couple centuries. However, what people don't know is Tribonacci sequence.
  Tribonacci sequence is defined by the recurrence:
  tri(1) = 3
  tri(n) = 1 + n / 2, if n is even.
  tri(n) =  tri(n - 1) + tri(n - 2) + tri(n + 1), if n is odd.
  For example:
  tri(2) = 1 + (2 / 2) = 2
  tri(4) = 3
  tri(3) = tri(2) + tri(1) + tri(4)
         = 2 + 3 + 3 = 8 
  You are given a non-negative integer number n, you have to a return a list of the 
  first n + 1 numbers of the Tribonacci sequence.
  Examples:
  tri(3) = [1, 3, 2, 8]
  */
const tri = (n) => {
  if (n == 0) { return [1] }
  if (n == 1) { return [1, 3] }
  let p = [1, 3]
  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      p.push(1 + i / 2)
    }
    else {
      p.push(p[i - 2] + p[i - 1] + 1 + i + (i + 1) / 2)
    }
  }
  return p
}

const testTri = () => {
  console.assert(JSON.stringify(tri(3)) === JSON.stringify([1, 3, 2.0, 8.0]))
}
testTri()

module.exports = tri