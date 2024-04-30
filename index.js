// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

// Q3) Write a simple arrow function that squares a number.

// Q1)Rewrite the following function as an arrow function
let greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("wahab"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

let sum = (a, b) => {
  return a + b;
};
console.log(sum(1, 2));

// Q3) Write a simple arrow function that squares a number.
let sqr = (a) => {
  return a * a;
};
console.log(sqr(4));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const numbers = [1, 2, 3]; //=> [1,4,9]

let res = numbers.map((num) => {
  return num * num;
});

console.log(res);
