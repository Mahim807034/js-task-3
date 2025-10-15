function removeDigits(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char >= '0' && char <= '9') {
      continue;
    }

    result += char;
  }

  return result;
}
console.log(removeDigits("hel99o gy73s"));
