const hello = () => {
  console.log("Hello");
};

function onePlusAvg(x, y) {
  return Math.round(1 + (x + y) / 2);
}

const sum = (p, q) => {
  return p + q;
};

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Avg of a and b is ", onePlusAvg(a, b));
console.log("Avg of b and c is ", onePlusAvg(b, c));
console.log("Avg of a and c is ", onePlusAvg(a, c));
console.log(sum(9, 7));
hello();
