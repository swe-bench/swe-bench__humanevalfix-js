/*Return n-th Fibonacci number.
  >>> fib(10)
  55
  >>> fib(1)
  1
  >>> fib(8)
  21
  */
const fib = (n) => {
  if (n == 0)
    return 0;
  if (n == 1)
    return 1;
  if (n == 2)
    return 2;
  return fib(n - 1) + fib(n - 2);
}

const testFib = () => {
  console.assert(fib(10) === 55)
  console.assert(fib(1) === 1)
  console.assert(fib(8) === 21)
}
testFib()

module.exports = fib