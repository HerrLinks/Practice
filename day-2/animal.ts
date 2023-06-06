"use strict";

// Create an Animal class based on the following description
//  - every animal has a "hunger" and "thirst" property, both of them are numbers
//  - when an animal is instantiated both hunger and thirst are set to 50
//  - every animal can eat() which decreases its hunger by one
//  - every animal can drink() which decreases its thirst by one
//  - every animal can play() which increases both its hunger and thirst by one

export class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger: number = 50, thirst: number = 50) {
      this.hunger = hunger;
      this.thirst = thirst;
  }

  eat() {
      this.hunger--;
  }

  drink() {
      this.thirst--;
  }

  play() {
      this.hunger++;
      this.thirst++;
  }
}