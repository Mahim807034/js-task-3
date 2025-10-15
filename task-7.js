function findSmallestDigit(number) {
  number = Math.abs(number);

  let smallest = 9;

  while (number > 0) {
    let digit = number % 10;

    if (digit < smallest) {
      smallest = digit;
    }

    number = Math.floor(number / 10);
  }

  return smallest;
}
console.log(findSmallestDigit(6767566565443232));
