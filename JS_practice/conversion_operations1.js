let val=1;
let negval=-val;
console.log(negval)
console.log(2+2);
console.log(2-2);
console.log(2/5);
console.log(Math.floor(2/4)); // For integer division
console.log(2*5);
console.log(2%7);

console.log("__________________________________________________");

// string conversion

let str1="hello ";
let str2="world";
console.log(str1+str2);  // concatenation

console.log(str1.repeat(5)); // repeat function

console.log(str2+str1);

console.log("_______________________________________________");

console.log("1"+2);
console.log(1+"2");
console.log("1"-2); // implicit conversion to number => subtraction gives -1
console.log(2-"1");
console.log("1"+ 2+ 3);
console.log(3+ 2+ "1");
console.log("1"*2);
console.log("6"/"2");

console.log("_______________________________________________");

// implicit conversion      

let x= 5;
let y= "10";

console.log(x + Number(y)); // explicit conversion of y to number

console.log(x + -y); // unary plus operator to convert string y to number output -5>>> -y converts string to number but negative i.e -10

console.log(x + +y); // unary plus operator to convert y to number output 15>>>+y converts string to number

console.log(x - Number(y)); // explicit conversion of y to number

console.log(x - +y); // unary plus operator to convert y to number      output -5

console.log("_______________________________________________");

// explicit conversion

let p= 15;
let q= "20";

console.log(String(p) + q); // explicit conversion of p to string

console.log(p.toString() + q); // using toString() method

console.log("_______________________________________________");

// more operations

let m= "5";
let n= "3";
