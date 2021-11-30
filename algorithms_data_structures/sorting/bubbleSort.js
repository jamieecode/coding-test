// JavaScript has "sort" method but it does NOT work with numbers (because sort method sorts in Unicode order)
// However, this method accepts "comparator function". By using this, you can compare elements
// and sort order based on the return value.
// if it returns a negative number, its order will be a to b
// if it returns a positive number, its order will be b to a
// .sort((a,b) => a-b) OR .sort((a,b) => b-a)

// REMEMBER swap!!
// let temp = array[i]
// array[i] = array[j]
// array[j] = temp

// BubbleSort
// largest value goes up to the top

// BIG O
// Time Complexity - worst case => O(n^2)
//                 - average => O(n^2)
//                 - best case => O(n)
// Space complexity => O(1)

function bubbleSort(array) {
  let isSwapped;

  for (let i = array.length; i > 0; i--) {
    isSwapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return array;
}
