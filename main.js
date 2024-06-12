/*
  Given an array of integers, sort the integers that are between 1 and 9 inclusive,
  reverse the resulting array, and then replace each digit by its corresponding name from
  "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine".

  For example:
    arr = [2, 1, 1, 4, 5, 8, 2, 3]   
          -> sort arr -> [1, 1, 2, 2, 3, 4, 5, 8] 
          -> reverse arr -> [8, 5, 4, 3, 2, 2, 1, 1]
    return ["Eight", "Five", "Four", "Three", "Two", "Two", "One", "One"]
  
    If the array is empty, return an empty array:
    arr = []
    return []
  
    If the array has any strange number ignore it:
    arr = [1, -1 , 55] 
          -> sort arr -> [-1, 1, 55]
          -> reverse arr -> [55, 1, -1]
    return = ['One']
  */
const byLength = (arr) => {
  p = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) { p.push(arr[i]) }
  }
  for (let j = 0; j < p.length; j++) {
    let ind = j
    for (let k = j + 1; k < p.length; k++) {
      if (p[k] > p[ind]) {
        ind = k
      }
    }
    if (ind > j) {
      let tmp = p[j]
      p[ind] = tmp
    }
  }
  let l = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  let t = []
  for (let j = 0; j < p.length; j++) {
    t.push(l[p[j]-1])
  }
  return t
}

const testByLength = () => {
  console.assert(
    JSON.stringify(byLength([2, 1, 1, 4, 5, 8, 2, 3])) ===
    JSON.stringify([
      'Eight',
      'Five',
      'Four',
      'Three',
      'Two',
      'Two',
      'One',
      'One',
    ])
  )
  console.assert(JSON.stringify(byLength([])) === JSON.stringify([]))
  console.assert(
    JSON.stringify(byLength([1, -1, 55])) === JSON.stringify(['One'])
  )
}
testByLength()

module.exports = byLength