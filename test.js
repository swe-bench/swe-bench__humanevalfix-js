const validDate = require('./main');

const testValidDate = () => {
  console.assert(validDate('03-11-2000') === true)
  console.assert(validDate('15-01-2012') === false)
  console.assert(validDate('04-0-2040') === false)
  console.assert(validDate('06-04-2020') === true)
  console.assert(validDate('01-01-2007') === true)
  console.assert(validDate('03-32-2011') === false)
  console.assert(validDate('') === false)
  console.assert(validDate('04-31-3000') === false)
  console.assert(validDate('06-06-2005') === true)
  console.assert(validDate('21-31-2000') === false)
  console.assert(validDate('04-12-2003') === true)
  console.assert(validDate('04122003') === false)
  console.assert(validDate('20030412') === false)
  console.assert(validDate('2003-04') === false)
  console.assert(validDate('2003-04-12') === false)
  console.assert(validDate('04-2003') === false)
}

testValidDate()
