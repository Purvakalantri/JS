
function temp(){
    console.log("P");
    console.log("u");
    console.log("r");
    console.log("v");
    console.log("a");
    
}

temp;  //reference of a function
temp(); //calling a function


//parameters=> are elements that are passed duing function defenition
// arguments  => are the elements we pass during the function calling

function addNO(num1, num2){  //num1, num2=> parameters
    console.log(num1+num2);
}

addNO(3,4); //7      3,4 are arguments
addNO(3,"6");//36
addNO(3,"a");//3a
addNO(3,null);//3


function SumNO(num1, num2){
    console.log("SumNo:",num1+num2);
}

const result= SumNO(5,10);
console.log(result);  //undefined bcs the fun is only called but not returned anything so it says undefined



// instead use return 

function ResultReturn(num1,num2){
    return num1+num2;
}

const res=ResultReturn(4,8);
const res2=ResultReturn();
console.log("RES",res);  //as the value is returned from the function so res is not defined and have value 12
console.log("RES2", res2); // gives NaN that is undefined

//it means when the parameters are not given in the code it just returns undefined or NaN

//if the arguments arent passed in the function call then we can give some default value 

function NameMe(username="Purva"){ //this is default username we have give in case the username isnt passed while calling a function
    return `Hii!, ${username}`;
}

console.log(NameMe("Sam")) //passed name => Hii!, sam
console.log(NameMe(""))  // blank space
console.log(NameMe()); //no arg passed so default name Purva=> Hii!, Purva



// while inserting items in shopping cart in ecommerce website 
// we dont know how many no of args will be passed so => use Rest/Spread operator

function CartPrice(...num){
    return num;
} 

console.log(CartPrice(200,300,400,600));
// it uses spread to add any no of args in the fun call
// it basically creates an array of objects and store it 


function CartPrice2(val1,val2,...num){
    return num;
} 

console.log(CartPrice2(200,300,400,600)); //return [400,600]
// becaues val1=200 and val2=300 and we have returned num so num holds [400,600]


// object and function

const user={
    username:"Purva",
    age:15
}

function HandleObj(anyobj){
    console.log(`Hii! my age is ${anyobj.age}  and i am ${anyobj.username}`);
}

HandleObj(user);
// Or instead of creating an object

HandleObj({
    username:"Sam",
    age:100
})
// or you can even pass an array

function HandleObj2(getArray){
    return getArray[2];
}

console.log(HandleObj2([200,300,400]));



