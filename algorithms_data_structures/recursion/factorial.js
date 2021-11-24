// function that accepts a number and returns the factorial of the number.

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
