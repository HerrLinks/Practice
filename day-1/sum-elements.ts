"use strict";

// - Create an array variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

function sumElements(): void {
  let numbers: number[] = [54, 23, 66, 12];
  console.log(numbers[1] + numbers[2]);
}

sumElements();

export { sumElements };