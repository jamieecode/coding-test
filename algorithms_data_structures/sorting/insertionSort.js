// BIG O
// Time Complexity - worst case => O(n^2)
//                 - average => O(n^2)
//                 - best case => O(n)
// Space complexity => O(1)

// store second element in the array. compare it with the one before and swap if necessary.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
}
