// this function refers to the current context/ value

const user = {
    username:"Sam",
    price:999,

    welcomeMsg: function(){
        // console.log(`${username}, welcome to Js`) only adding username gives error
        // so write this.username
        console.log((`${this.username}, welcome to Js`))
        console.log("This is the inside THIS ",this); 
        // when this is called inside function only then it assigns the currrent values because 
        // the objects scope remains till the brackets 
        // but when the brackets are closed the scope of obj is destroyed and it cant be assigend to outer this
    }
    
}
console.log("this is the outside THIS before calling the object function", this);
user.welcomeMsg();
user.username="Purva" //here i have changed the username
console.log(this.username) //o./p undefined coz of the scope of username is just inside the {} of obj
user.welcomeMsg();
console.log("this is the outher THIS after calling the object function ", this);
// even if the THIS is called after fun calling it still remains empty 

// ways to print values to global variables using "this"
const age=50
console.log(this.age); //gives undefined output

this.age2=55;
console.log(this.age2); //gives 55 output

module.exports.age=70
console.log(module.exports.age) //70
console.log(module.exports);//55, 70
console.log(typeof module.exports);//object


console.log(typeof this); //object



// Arrow Function

function chai(){
    console.log("function1")
    console.log(this);
    let username1="Champa"
    console.log(this.username1)//undefined
}

chai()

const chai_coffee= function(){
    console.log("Function2")
    console.log(this);
    let username2="chameli"
    console.log(this.username2)
}

chai_coffee()

const chai_Code= () => {
    console.log("function3")
    console.log(this); //gives o/p => {age:55, age: 70} because...
    // Since it's defined at the top level, it inherits the top-level this (which is module.exports)
    // otherwise if it wouldnt have initialized at top it would have given an empty {} object
    let username3="shila"
    console.log(this.username3);

}
chai_Code()


console.log("___________________________________")

const AddTwo=(num1,num2)=>{
    return num1+num2 //explicit return
}
console.log(AddTwo(3,4))

// widely used in react
const Add2= (num1,num2) => num1+num2 //implicit return
console.log(Add2(4,5))
// or else
    const Add2NO=(num1,num2)=> (num1+num2) //implicit return
console.log(Add2NO(5,6))

// how to return object

const ADDNO=(num1,num2)=> ({username:"Hitesh"})
console.log(ADDNO(6,7)) //it simplys return object username:"hitesh"
