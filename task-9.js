function countWords(sentence) {
  let inWord = false;
  let wordCount = 0;

  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    if (char !== ' ' && !inWord) {
      inWord = true;
      wordCount++;
    } else if (char === ' ') {
      inWord = false;
    }
  }

  return wordCount;
}
console.log(countWords("This a sentence"));
