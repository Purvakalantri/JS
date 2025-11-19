const  marval_heros = ["spiderman", "ironman", "thor", "hulk","Captain America", "batman", "superman"];
const DC = ["aquaman", "batman", "superman", "flash"]
const marval1= marval_heros.concat();
const marval2= marval_heros.concat();


marval_heros.push(DC);  
console.log(marval_heros); //creates array within array [marval_heros, [DC array]]

// console.log(marval_heros.length); //8 bcs it considers the dc array as single element which is the 8th

console.log(marval_heros[5]);  
console.log(marval_heros[7][2]); // to access superman from DC array inside marval_heros array

// marval_heros.concat(DC);
// console.log(marval_heros); // original array remains same because concat does not change the original array

console.log("________________________________________________");

// ways to copy an array
const combined_heros= marval1.concat(DC); //
console.log(combined_heros); // new array created with combined elements of both arrays
//OR

const spread_op = [...marval2, ...DC]; //prefers spread operator to combine arrays
console.log(spread_op); // new array created with spread operator


console.log("________________________________________________");

const another_array= [1,2,3,[4,5,6],7, [8,9,[10,11,[12],13],14]];

console.log(another_array.flat(3));

console.log(another_array.flat(2)); // flatens the array upto 2 levels


console.log(Array.isArray(marval_heros)); // checks if the variable is an array or not
console.log(Array.isArray("Purva"));//checks if the passed elemment is array or not
console.log(Array.from("Purva")); // converts string to array of characters

let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3)); // creates an array from the provided elements
