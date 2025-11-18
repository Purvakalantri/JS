const acc_id="1234";

var acc_name= "pk";
let email="ok@gmail.com";

/*
var has a functional scope like it can be used and changed from anywhre
let have blocked scope-> means scope within {} bracketd they cant be use/changed outside block so let is mostly used
const value remians constant you cant directly change the value once assigned
*/ 

acc_City="New York"; //bad practice

// acc_id=10; // const cant be changes once assigned with a value

let acc_dept;

let acc=null;

console.log(acc_id);

console.table({acc_id, acc_name, email, acc_City, acc_dept, acc});

