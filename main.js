/* Given a string, find out how many distinct characters (regardless of case) does it consist of
  >>> countDistinctCharacters('xyzXYZ')
  3
  >>> countDistinctCharacters('Jerry')
  4
  */
const countDistinctCharacters = (string) => {
  return (new Set(string)).size;

}

const testCountDistinctCharacters = () => {
  console.assert(countDistinctCharacters('xyzXYZ') === 3)
  console.assert(countDistinctCharacters('Jerry') === 4)
}
testCountDistinctCharacters()

module.exports = countDistinctCharacters