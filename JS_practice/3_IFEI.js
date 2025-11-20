// it is an Immedaitely Invoked Function Expressions (IIFE)

//  it means it calls function as soon as the code is run

function chai(){
    console.log("DB connected");
}

// IIFE function call


// declaration type one
( function chai_code(){
    //named function here name of the function is chai_code
    console.log("IIFE DB");
}) ();

//declaretion type 2
( (name)=> {
// function with parameter
    //unnamed function bcs the function name isnt mentioned
    console.log(`Unnamed function  ${name}`);
})("Purva");

