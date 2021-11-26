// arrays must be "sorted" before implementing binary search
// DIVIDE and CONQUER!
// it can eliminate half of the elements at a time.

// BIG O - worst case => O(log n)
//       - average case => O(log n)
//       - best case => O(1)

// pseudocode
// function takes a sorted array and a value
// need left, right, middle pointer that checks where the value is located at.
// if the value is found, return the index
//  if not return -1

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (array[middle] !== value && left <= right) {
    if (value <= array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === value ? middle : -1;
}
