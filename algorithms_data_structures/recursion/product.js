// function that takes an array of numbers and returns the product of all the numbers.

function productOfArray(array) {
  if (array.length === 1) return array[0];
  return array[0] * productOfArray(array.slice(1));
}
