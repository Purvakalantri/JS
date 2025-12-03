let val1
// val1= null ?? undefined
val1= undefined ?? undefined ?? null

console.log(val1);
console.log("type of NaN: ",typeof NaN) // number

// for of loop
const arr= [1,2,3]
for (const num of arr) {
    console.log(num);
}

// map=> contains unique values 
// forOf loop
const map= new Map()

map.set("IN", "INDIA");
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IND", "Indiana") //wont get print coz the key is same and map only prints unique elements 
// if the key would have IND or diff it would have printed
// the key shouldnt be same even if the value is same it will print but if the key is same it wont print anything
console.log(map)

// how to iterate through the map

for (const key of map){
    console.log(key) //it prints array
    // output
    // [ 'IN', 'INDIA' ]
    // [ 'USA', 'United States of America' ]
    // [ 'Fr', 'France' ]
    // [ 'IND', 'Indiana' ]
}

// but i want diff values of key and value pair

for (const [key,value] of map){
    console.log(key,":-",value);
    //output 
//     IN :- INDIA
//     USA :- United States of America
//     Fr :- France
//     IND :- Indiana
}

// iterating through object using for of loop

const myObj= {
    "game": "football",
    "need": "ball",
    "playtime": "8a.m"
}

// for (const key of myObj){
    // console.log(key)   myObj is not iterable object isnt iteratable using for of
// }

// object iteratration methods
// forIn loop
const myObject={
    "js":"javascript",
    "cpp": "C++",
    "py": "Python",
    rb:"Ruby"
}

for (const key in myObject) {
    console.log("Only Keys: ",key) //but it only prints the key not the values
}

for (const [key, value] in myObject) {
    console.log("Both key and values",key, value) //but it only prints the key but with spaces with each letter
//output
// j s
// c p
// p y
// r b
}

for (const key in myObject) {
    console.log(`${key} :- ${myObject[key]}`) 
    //to print both key and values you use this method => myobject[key]
}

// array
const a=["js","py", 1]
for (const key in a) {
    console.log(key) //output 0 1 2
    // it gives the position of the elements => 
        // arrays key is its index number

    // console.log(a[key]) //it prints the values 
}

// forEach loop

const coding=["js","cpp",1]

coding.forEach(function (val){ //normal function
    // since it is callback function so it dont have a name
    console.log(val)
})
// using arrow function
coding.forEach( (item)=>{
    console.log(item)
})


// using functio

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)


//to print entire rr

coding.forEach((item,index,arr)=>{

    console.log(item,index,arr)
})


// how to access object within array

const mycodeing=[
    {
        lang:"Ruby",
        langFile: "rb"
    },
    {
        lang:"Python",
        langFile:"py"
    }
]


mycodeing.forEach((item)=>{
    console.log(item)

})

mycodeing.forEach((item)=>{
    console.log(item.lang)
    console.log(item.langFile)
        
})