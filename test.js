const sortNumbers = require('./main');

const testSortNumbers = () => {
  console.assert(sortNumbers('') === '')
  console.assert(sortNumbers('three') === 'three')
  console.assert(sortNumbers('three five nine') === 'three five nine')
  console.assert(
    sortNumbers(
      'five zero four seven nine eight') === 'zero four five seven eight nine'
  )
  console.assert(
    sortNumbers(
      'six five four three two one zero') === 'zero one two three four five six'
  )
}

testSortNumbers()
