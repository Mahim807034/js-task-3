function printFirstAndLast(str){
    if (str.length===0){
        console.log("Empty string");
    }
  let firstChar = str[0];
  let lastChar = str[str.length - 1];

  console.log("first character",firstChar);
  console.log( "last character",lastChar);
}
printFirstAndLast("Hello world");
