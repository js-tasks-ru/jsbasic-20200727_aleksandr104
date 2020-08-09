/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let valueFactorial = n;

  if (n == 0 || n == 1) {
    valueFactorial = 1;
  } else {
    for (n; n > 1;) {
      n--;
      valueFactorial = valueFactorial * n;
    }
  }

  return valueFactorial;
}
