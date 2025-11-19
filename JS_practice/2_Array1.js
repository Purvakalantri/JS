const Arr = [1,2,3,4,5];

const Arr2= new Array(1,4,5,3);

console.log(Arr2);
//array methods

Arr.push(3);
Arr.push(10);
console.log(Arr); // adds element at the end of array

Arr.pop();
console.log(Arr); // removes last element from array

Arr2.unshift(8);
console.log(Arr2); // adds element at the beginning of array


Arr2.shift();
console.log(Arr2); // removes first element from array

Arr2.shift();
console.log(Arr2); // removes first element from array

console.log(Arr.includes(3));

console.log(Arr2.indexOf(19))

const newArr= Arr.join("|"); // converts array to string with separator provided
console.log(Arr);
console.log(newArr);
console.log(typeof Arr); // this is object
console.log(typeof newArr); // this is string




// slice and splice methods

const myArr= new Array(1,2,3,4,5,6,7);
console.log("A",myArr)

const myArr1= myArr.slice(2,4); // slice returns the numbers whose index is mentioned in the (start,end) end =end-1 always

console.log("B",myArr);
console.log(myArr1);

const myArr2= myArr.splice(2,4); // but in splice it extractes the indexes mentioned in the (start, end) end is actual endthat is mentioned 
// here it is (2,4) so it will remove 4 elements starting from index 2 not till the 4th index but the 4 numbers starting from 2nd index

console.log("C",myArr);
console.log(myArr2);


