//nn bb ss u - Primitive datatypes
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//Objects (Non primitive datatypes)
const item = {
  Harry: true,
  Shubh: false,
  Lovish: 67,
  Rohan: undefined,
};

console.log(item["Harry"]);
