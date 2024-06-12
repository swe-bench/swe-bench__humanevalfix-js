const isNested = require('./main');

const testIsNested = () => {
  console.assert(isNested('[[]]') === true)
  console.assert(isNested('[]]]]]]][[[[[]') === false)
  console.assert(isNested('[][]') === false)
  console.assert(isNested('[]') === false)
  console.assert(isNested('[[[[]]]]') === true)
  console.assert(isNested('[]]]]]]]]]]') === false)
  console.assert(isNested('[][][[]]') === true)
  console.assert(isNested('[[]') === false)
  console.assert(isNested('[]]') === false)
  console.assert(isNested('[[]][[') === true)
  console.assert(isNested('[[][]]') === true)
  console.assert(isNested('') === false)
  console.assert(isNested('[[[[[[[[') === false)
  console.assert(isNested(']]]]]]]]') === false)
}

testIsNested()
