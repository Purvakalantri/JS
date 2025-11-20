var c=300 //still print 30 bcs value changed in if statement
// that means var have global scope 
// even though they are defined in  blocked scope+>{} they have global scope
// but let and const ahve local scope
let a=500
if(true){
    let a=10;
    const b=20;
    var c=30
    console.log("INNEr",a);
}

console.log(a);


// console.log(a); //wont get print gives error
// console.log(b);//wont get print gives error
console.log(c); // will print 30


// Nested scope

function one(){
    const username="Purva"

// for two the username is global scope

    function Two(){
        const website="Youtube"
        console.log(username);
    }

    // but for one the scope of website is blocked which is inside two so gives error
    // console.log(website)

    Two()
}

one();


if(true){
    const isername="Kalantri";
    if(isername==="Kalantri"){
        const website="Chrome"
        console.log(isername+website); //it will get printed
    }
    // console.log(website);  it wont work due to scope
}
// console.log(isername); it wont work due to scope 


console.log("________________________________");

console.log("Interesting concept");


console.log(AddOne(5)); //will work even though it is called before function declaration 
function AddOne(num){
    return num+1
}

// console.log(addTwo(5)) //wont work bcs here the fun is stored in a diff variable
const addtwo= function(num){
    return num+2
}

console.log(addtwo(5)); //will work 

