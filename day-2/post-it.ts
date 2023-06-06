"use strict";

// Create a PostIt class that has the following properties:
//  - backgroundColor
//  - text
//  - textColor
//
// Make sure to set the default values of properties/fields to be an empty string
//
// Create a few example PostIt instances and set their properties to the following values:
//  - an orange one with blue text: "Idea 1"
//  - a pink with black text: "Awesome"
//  - a yellow with green text: "Superb!"

export class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
      this.backgroundColor = backgroundColor;
      this.text = text;
      this.textColor = textColor;
  }
}


const orangePostIt = new PostIt("orange", "Idea 1", "blue");
const pinkPostIt = new PostIt("pink", "Awesome", "black");
const yellowPostIt = new PostIt("yellow", "Superb!", "green");

console.log(orangePostIt);
console.log(pinkPostIt);
console.log(yellowPostIt);