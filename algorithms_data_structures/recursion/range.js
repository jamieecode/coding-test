// function that takes a number and adds up all the numbers from zero to the number

function range(num) {
  if (num === 1) return 1;
  return num + range(num - 1);
}
