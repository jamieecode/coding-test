// function that takes a number and returns the nth number in the Fibonacci sequence.

function fibonacci(num) {
  if (num <= 2) return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
}
