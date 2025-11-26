function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}

one()
two()
three()


function four(){
    console.log("four")
    five()
}

function five(){
    console.log("five")
    six()
}
function six(){
    console.log("Six")
}
four()
// five()
// six()

function seven(){
    console.log("Seven")
    // even if it gives o/p 7, 8 , 9
// still in stack it works like 
    // |nine()  |=>this comes out 2nd
    // |eight() |=> this comes out FinalizationRegistry
    // |seven() |=> this comes out 3rd
    // |globalEC|
    // ''''''''''
    function eoght(){
        console.log("Eight")
    }
    eoght()
    
    function nine(){
        console.log("Nine")
    }
    nine()
}
seven()
 // nine() will give not defined error

