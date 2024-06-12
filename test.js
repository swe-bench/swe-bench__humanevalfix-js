const maxFill = require('./main');

const testMaxFill = () => {
  console.assert(
    maxFill(
      [
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 1, 1],
      ],
      1
    ) === 6
  )
  console.assert(
    maxFill(
      [
        [0, 0, 1, 1],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 1, 1, 1],
      ],
      2
    ) === 5
  )
  console.assert(
    maxFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      5
    ) === 0
  )
  console.assert(
    maxFill(
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      2
    ) === 4
  )
  console.assert(
    maxFill(
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      9
    ) === 2
  )
}

testMaxFill()
