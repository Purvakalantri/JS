const score=100;

const Balance= new Number(1000.7236); // Number object

console.log(typeof score); // "number"
console.log(typeof Balance); // "object"
console.log(Balance); // [Number: 1000]



console.log(Balance.toExponential()); // converts number to exponential notation
console.log(Balance.toFixed(3)); // formats number to specified decimal places
console.log(Balance.toString()); //converts number to string
console.log(Balance.toLocaleString()); // gives commas in thousands place
console.log(Balance.toPrecision(2)); // rounds off the number to specified length
console.log(Balance.valueOf()); // returns primitive value of number object


console.log(Number.isSafeInteger(10000)); // checks if the number is a safe integer and within limit

console.log(Number.parseFloat("100.567abc")); // parses a string and returns a floating point number
console.log(Number.parseInt("100.567abc")); // parses a string and returns an integer

console.log(Number.MAX_SAFE_INTEGER); // maximum safe integer value
console.log(Number.MIN_SAFE_INTEGER); // minimum safe integer value

console.log("_________________________________________________");


// some maths methods


console.log(Math);
console.log(Math.abs(-8)); //converts to +ve value
console.log(Math.pow(2,3)); // 2 raised to power 3
console.log(Math.sqrt(64)); // square root
console.log(Math.round(384.863)); // rounds off to nearest integer
console.log(Math.floor(384.863)); // roundes off to lower number
console.log(Math.ceil(384.263)); //roundes off to higher number
console.log(Math.min(4,8,1,6,3));

console.log(Math.random()); // generates random number between 0 and 1
console.log(Math.random()*100); // generates random number between 0 and 100
console.log(Math.floor(Math.random()*10 +1)); // generates random number between 1 to 10 not 0
console.log(Math.floor(Math.random()*50 +1)); // generates random number between 1 to 50 not 0

//  to give max and min value range
const min=10;
const max=50
console.log((Math.floor(Math.random()*max - min +1))+min); // generates random number between 10 to 50 not 0
