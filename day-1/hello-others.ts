'use strict';

// Greet 3 of your classmates with this program in three separate lines like:
//
// Hello, Esther!
// Hello, Mary!
// Hello, Joe!

const names: string[] = ['Esther', 'Mary', 'Joe'];

function helloOthers(names: string[]): string {
  
  let greeting: string = '';

  for (let i: number = 0; i < names.length; i++) {
    greeting += `Hello, ${names[i]}!\n`;
  }
  return greeting;
}

console.log(helloOthers(names));