const myNums=[1,2,3,4,5,6,7,8,9]

// add 10 to every num

console.log(myNums.map((num)=> num+10))


const NewNums= myNums
                .map((num)=> num*10)  
                .map((n)=> n+1)   //or you can keep it num only instead of n
                .filter((number)=> number>=40)

console.log(NewNums)

console.log("___________________________________")

// reduce : Reduces array elements into single value

const mynum2=[4,3,7]

const TotalVal= mynum2.reduce(function (acc, currVal){
        console.log(`accumalator : ${acc} and currVal: ${currVal}`)
        return acc+currVal
}, 2)

console.log(TotalVal)

const shoppingCart= [
    {
        course:"Cpp",
        price:2999
    },
    {
        course:"python",
        price:5999
    },
    {
        course:"DSA",
        price:7999
    },
]

const priceToPay= shoppingCart.reduce((acc, currVal)=> acc+currVal.price, 0)

console.log(priceToPay)