// Set first element as the smallest value.
// Compare this with the next item in the array until you find a smaller one.
// When a smaller number is found, it is going to be the new smallest value til the end of the array.
// If the index of smallest value is not the one you set in the beginning, swap two values.

// BIG O
// Time Complexity - worst case => O(n^2)
//                 - average => O(n^2)
//                 - best case => O(n^2)
// Space complexity => O(1)

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smallestIndex] > array[j]) {
        smallestIndex = j;
      }
    }
    if (i !== smallestIndex) {
      let temp = array[i];
      array[i] = array[smallestIndex];
      array[smallestIndex] = temp;
    }
  }
  return array;
}
