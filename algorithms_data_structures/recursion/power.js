// function that returns the power of the base to the exponent

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * Math.pow(base, exponent - 1);
}
