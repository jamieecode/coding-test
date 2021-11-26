// JavaScript has search methods on arrays
// such as "indexOf" "includes" "find" "findIndex"

// BIG O - worst case => O(n)
//       - average case => O(n)
//       - best case => O(1)

// pseudocode for linear search
// function that accepts an array and a value.
// loops through the array and check if element in array is same as the value.
// If it is equal, returns the index of the array. if not, returns -1

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
