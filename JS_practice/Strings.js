const username= "        PurvaKalantri   is genius       ";
const id=101;

console.log(username + id+ " is a developer"); // this is a bad practice

// instead use backticks => ` `

console.log(`Hii!, ${username}, your id is ${id}`); // this is good practice


//  way to declare a string

const gamename= new String("Football"); // creating a string object using String constructor
console.log(gamename);
console.log(gamename.valueOf()); // to get the primitive value of the string object
console.log(gamename[0]);
console.log(typeof gamename); // object

const fruit="Mango";
console.log(fruit);
console.log(typeof fruit); // string

// even though both gamename and fruit represent strings but their data types are different
// gamename is an object where as fruit is a primitive string

// we should prefer primitive strings over string objects because string objects have additional properties and methods which can lead to unexpected behavior and performance issues

// some string methods

console.log(username.length);
console.log(username.toUpperCase());
console.log(username.toLocaleLowerCase());
console.log(username.charAt(2));
console.log(username.indexOf('r'));
console.log(username.includes('r'));
console.log(username.substring(1,3));
console.log(username.slice(-10,6)); //starts from right end having 10th indes which is v and 6 means start with v and end at k (4-6)
console.log(username.replace('Purva', "developer"));
console.log(username.concat(" is a developer"));
console.log(username);
console.log(username.trim());  // removes whitespace from both ends of the string
console.log(username.split('')); // string to array conversion based on the separator provided