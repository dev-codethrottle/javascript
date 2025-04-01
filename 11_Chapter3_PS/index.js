const prompt = require("prompt-sync")();
let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  monika: 4,
};

// Problem 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " is " +
      marks[Object.keys(marks)[i]]
  );
}

// Problem 2

for (let key in marks) {
  console.log("The marks of " + key + " is " + marks[key]);
}

// Problem 3
let cn = 4;
let i;
while (i != cn) {
  console.log("Try again");
  i = prompt("Enter a number");
}
console.log("You have entered a correct number");

// Problem

const findmean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(findmean(1, 2, 3, 4, 5));
