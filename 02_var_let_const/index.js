console.log("Jascript tutorial 2: var, let and const");

// var a = 45; // var is global
// var a = "p"
let b = "Harry";
// let b = 4 // Let cannot be redeclared
b = 4; // Let can be updated
const author = "harry"; // const cannot be redecalred and updated
// let author = 5 // Throws an error
// author = 5 // Throws an error
let c = null;
let d = undefined;

{
  let b = "this"; // Let is block scope
  console.log(b);
}

console.log(b);
