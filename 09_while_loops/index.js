const prompt = require("prompt-sync")();

// while loop
/*
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
while (i < n) {
  console.log(n);
  i++;
}
*/

// do-while loop
let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
do {
  console.log(n);
  i++;
} while (i < n);
