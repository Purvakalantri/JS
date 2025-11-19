// 1. type=> obj literals
const mysym= Symbol("sym1");
const mysym2= Symbol("sym2");

const JSUser={
    username:"Purva",
    "Full name": "Purva Kalantri", 
    mysym: "mysym1value", // its not a way to use symbol as key
    [mysym2]: 10,   //this is actual symbol key and its value is 10 which gives type number otherwise its object key
    age:12,
    location:"Jaipur",
    email:"p@gmail.com",
    isLoggedIn: false,
    LastLogin: ["monday", "saturday"]
}

console.log("JSUSER Object",JSUser);
console.log(typeof JSUser); // object


// 2 ways to access objets elements
console.log(JSUser.email); // 1 bad practice
console.log(JSUser["email"]); // 2 preferred way when key is dynamic

// console.log(JSUser."Full name"); //not possible because of space in key
console.log(JSUser["Full name"]); // preferred way to access such keys

//  printing symbols

console.log(JSUser.mysym); // undefined because mysym is treated as string key here
console.log(typeof JSUser.mysym); // string

console.log(JSUser[mysym2]);
console.log(typeof JSUser[mysym2]); //number bcs the value provided in the mysym2 is number and it is object key here

//t o freeze values in object

JSUser.email="purva@google.com";
// Object.freeze(JSUser);

JSUser.email="pk@microsoft.com";

console.log(JSUser);

console.log("_______________________________________________");

// to seal an object

const myobj={
    name:"test",
    age:20
};

delete myobj.name; 
Object.seal(myobj);

myobj.age=30; // allowed
myobj.name="updated test"; // allowed
// myobj.location="India"; // not allowed
//it means once sealed you cant add new properties
 
console.log(myobj);

console.log("_______________________________________________");

// function declaration

JSUser.greeting= function(){
    console.log("HEllo Js user");
}

console.log(JSUser.greeting);  // function definition=> [Function (anonymous)] 
console.log(typeof JSUser.greeting); // function

console.log(JSUser.greeting());

JSUser.greeting2= function(){
    console.log(`hii!, ${this.username}`);
}

console.log(JSUser.greeting2());



