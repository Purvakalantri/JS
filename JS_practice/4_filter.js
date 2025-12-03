const mynums=[1,2,3,4,5,6,7,8,9]

console.log(mynums.filter((num) => num>4))
// or
const newnum= mynums.filter((num)=>{
    return num>4
})
console.log(newnum)
// or 
const newnum2= mynums.filter((num)=> (num>4))
console.log(newnum2)

// or
const newnums3=[]
mynums.forEach((num)=>{
    if(num > 4){
        newnums3.push(num)
    }
})
console.log(newnums3)



// using filters


// this is how filters are used in the data that came from my sql 
// when user uses filters in the frontend this is how its working is doneusing these filters

const Books=[
    {
        bName:"it ends with us",
        publish:2000,
        edited:2002,
        genre:"RomCom"
    },
    {
        bName:"It starts with us",
        publish:1993,
        edited:2007,
        genre:"RomCom"
      
    },
    {
        bName:"It starts with us",
        publish:1943,
        edited:1995,
        genre:"HISTORY"
      
    },
    {
        bName:"me before you",
        publish:1983,
        edited:1990,
        genre:"fiction"
      
    },

    {
        bName:"anyone but you",
        publish:1997,
        edited:2001,
        genre:"fiction"
      
    },
    
]


let UserBooks= Books.filter((bk)=> (bk.genre==="fiction"))
console.log(UserBooks)


let UserBooks2=Books.filter((bk)=> (bk.publish>=1990))
console.log(UserBooks2)


let UserBooks3=Books.filter((bk)=> (bk.publish>=1995 && bk.genre==="RomCom"))
console.log(UserBooks3)


