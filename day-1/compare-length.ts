"use strict";

// - Create an array variable named `firstArrayOfNumbers`
//   with the following content: `[1, 2, 3]`
// - Create an array variable named `secondArrayOfNumbers`
//   with the following content: `[4, 5]`
// - Print "secondArrayOfNumbers is longer" if `secondArrayOfNumbers`
//   has more elements than `firstArrayOfNumbers`
// - Otherwise print: "firstArrayOfNumbers is the longer one"

function compareLength(): void {
  let firstArrayOfNumbers: number[] = [1, 2, 3];
  let secondArrayOfNumbers: number[] = [4, 5];

  if (secondArrayOfNumbers.length > firstArrayOfNumbers.length) {
    console.log("secondArrayOfNumbers is longer");
  } else {
    console.log("firstArrayOfNumbers is the longer one");
  }
}

compareLength();

export { compareLength };