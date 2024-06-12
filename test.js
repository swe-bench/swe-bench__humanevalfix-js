const getRow = require('./main');

const testGetRow = () => {
  console.assert(
    JSON.stringify(
      getRow(
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 1, 6],
          [1, 2, 3, 4, 5, 1],
        ],
        1
      )
    ) === JSON.stringify([(0, 0), (1, 4), (1, 0), (2, 5), (2, 0)])
  )
  console.assert(
    JSON.stringify(
      getRow(
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
        ],
        2
      )
    ) === JSON.stringify([(0, 1), (1, 1), (2, 1), (3, 1), (4, 1), (5, 1)])
  )
  console.assert(
    JSON.stringify(
      getRow(
        [
          [1, 2, 3, 4, 5, 6],
          [1, 2, 3, 4, 5, 6],
          [1, 1, 3, 4, 5, 6],
          [1, 2, 1, 4, 5, 6],
          [1, 2, 3, 1, 5, 6],
          [1, 2, 3, 4, 1, 6],
          [1, 2, 3, 4, 5, 1],
        ],
        1
      )
    ) ===
    JSON.stringify([
      (0, 0),
      (1, 0),
      (2, 1),
      (2, 0),
      (3, 2),
      (3, 0),
      (4, 3),
      (4, 0),
      (5, 4),
      (5, 0),
      (6, 5),
      (6, 0),
    ])
  )
  console.assert(JSON.stringify(getRow([], 1)) === JSON.stringify([]))
  console.assert(JSON.stringify(getRow([[1]], 2)) === JSON.stringify([]))
  console.assert(
    JSON.stringify(getRow([[], [1], [1, 2, 3]], 3)) === JSON.stringify([(2, 2)])
  )
}

testGetRow()
