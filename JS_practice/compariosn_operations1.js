console.log(2>3);
console.log(2<3);
console.log(2>=2);
console.log("2">1)
console.log("2"<"12");
console.log("abc"=="abc");
console.log("abc"==="abc");
console.log(2=="2");
console.log(2==="2");


console.log(null>0);
console.log(null>=0);
console.log(null==0);
console.log(null<0);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
// console.log(undefinded>=0);

console.log(null>undefined);
console.log(null<undefined);
console.log(null==undefined);  //loose equality ==
console.log(null === undefined); //strict equality ===


//  if(5=="5") loose equality because the "5" is converted to number 5 and then compared so output is true
//  if(5==="5") strict equality because no conversion takes place so output is false


let id1=Symbol('123');
let id2=Symbol('123');
if(id1==id2){
    console.log("Symbols are equal");
}
else{
    console.log("Symbols are not equal");
}

if(id1===id2){
    console.log("Symbols are equal");
}
else{
    console.log("Symbols are not equal");
}           
    
// Symbols are unique and even if they have same description they are not equal