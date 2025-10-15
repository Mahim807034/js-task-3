function factorial(n) {
  if (n < 0) return undefined;

  let result = 1;
  let i = n;

  while (i > 1) {
    result *= i;
    i--;
  }

  return result;
}
console.log(factorial(6));