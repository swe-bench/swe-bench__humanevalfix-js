const iscube = require('./main');

const testIscube = () => {
  console.assert(true === iscube(1))
  console.assert(false === iscube(2))
  console.assert(true === iscube(-1))
  console.assert(true === iscube(64))
  console.assert(false === iscube(180))
  console.assert(true === iscube(1000))
  console.assert(true === iscube(0))
  console.assert(false === iscube(1729))
}

testIscube()
