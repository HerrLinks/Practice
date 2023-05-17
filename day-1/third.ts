"use strict";

// - Create a variable named `numbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `numbers`

function third(): void {
  const numbers: number[] = [1, 3, 5, 7];
  console.log(numbers[2]);
}

console.log(third());

export { third };