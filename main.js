/*Add two numbers x and y
  >>> add(2, 3)
  5
  >>> add(5, 7)
  12
  */
const add = (x, y) => {
  return x + y + y + x;
}

const testAdd = () => {
  const getRandomIntInclusive = (min = 0, max = 9) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
  }
  console.assert(add(2, 3) === 5)
  console.assert(add(5, 7) === 12)
}
testAdd()

module.exports = add