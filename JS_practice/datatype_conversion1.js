// datatypes conversion

// 1.  A. string to number

let a="abc";
console.log(typeof a)
let a1= Number(a); // convert to number
console.log(typeof a1) //number
console.log(a1);  //Nan
console.log("-------------------------------")

// 1. B. string to bool

let a2= Boolean(a);
console.log(typeof a2)
console.log(a2);

console.log("###########################################")

// 2. A. Number to String
let b=10;
console.log(typeof b);
let b1= String(a);   
console.log(typeof b1)
console.log(b1);

console.log("-------------------------------")

// 2. B. Number to Boolean

let b2= Boolean(b);
console.log(typeof b2)
console.log(b2);

let d;
let b3=Boolean(d);
console.log(typeof d);
console.log(b3)
console.log(typeof b3);


console.log("############################################")


// 3. A. Boolean to string

let c=true;
console.log(typeof c);
let c1= String(c);   
console.log(typeof c1);
console.log(c1);
console.log("_______________________________")
// 3. B. Boolean to Number

let c2=Number(c)
console.log(typeof c2);
console.log(c2);