const prompt = require("prompt-sync")();

let a = prompt("Hey what's your age?");
a = Number.parseInt(a); // Converting the string to a number

if (a < 0) {
  console.log("This is an invalid age");
} else if (a < 9) {
  console.log("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  console.log("You are a kid and you can think of driving after 18");
} else {
  console.log("You can think of driving");
}
console.log("Done");

// Homework - Explore switch statement and write a basic program

// Ternary operator
console.log("You can", a < 18 ? "not driver" : "drive");
