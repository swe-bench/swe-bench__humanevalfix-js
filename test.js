const carRaceCollision = require('./main');

const testCarRaceCollision = () => {
  console.assert(carRaceCollision(2) === 4)
  console.assert(carRaceCollision(3) === 9)
  console.assert(carRaceCollision(4) === 16)
  console.assert(carRaceCollision(8) === 64)
  console.assert(carRaceCollision(10) === 100)
}

testCarRaceCollision()
