// type 2 => singleton object

const tinderUser1= new Object(); //singleton object o/p=> {}
const tinderuser={}; //not singleton object o/p => {}


tinderuser.id="101"
tinderuser.name="Sam"
tinderuser.isLoggedIn= false;
console.log(tinderuser);

const regularUser={
    email:"acb@gmail.com",
    fullname:{
        username:{
            firstname:"Purva",
            lastname:"Kalantri"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.username.firstname);
console.log(regularUser.hasOwnProperty("email")); // true
console.log(regularUser.hasOwnProperty("age")); // false

//IMPORTANT METHODS IN OBJECTS used for handling data come from database in form of objects
console.log(Object.keys(tinderuser))
console.log(Object.keys(regularUser))

console.log(Object.values(regularUser));
console.log(Object.values(tinderuser));

console.log(Object.entries(regularUser));
console.log(Object.entries(tinderuser));


console.log("__________________________________________");

// combine objects

const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};

const obj3= {obj1,obj2};
console.log(obj3); // obj wothin obj

const obj4= Object.assign({}, obj1, obj2) // even if we dont write {} it gives same result but giving {} is good practice
// {} means it combines the elements in the empty {} object
console.log("OBJ4",obj4);

const obj5={...obj1,...obj2}
console.log("OBJ5",obj5);


// from database values we will get array of objects

const users=[
    {id:1,
    email:"h@gmail.com"
    }
]

console.log(users[0].email);
console.log(users[0]['email']);


