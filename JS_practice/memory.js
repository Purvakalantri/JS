// how the memory is utilized in js specially the stack and head memory

// 1 stack memory

let a=10;
let b=a;

console.log(a); //10
console.log(b); //10

b=20; //updating b

console.log(a); //10
console.log("Updated b",b); //20

// here changes made in b will not affect a because both a and b are stored in stack memory as primitive data types
// it will just affect and che=ange value of b only

console.log("_______________________________________________");

// 2 heap memory

let obj1={name:"Alice", age:25};
let obj2=obj1;
console.log(obj1, obj2);

obj2.age=66;

console.log(obj1,obj2);

// here change in one on=bj variable chnaged the values of both the variables because both obj1 and obj2 are stored in heap memory as they are reference data types
// when we assign obj1 to obj2 the reference address of obj1 is copied to obj2 so both point to same memory location
// so any changes made via one variable will reflect in other variable also