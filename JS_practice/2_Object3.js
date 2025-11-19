// Destructuring of object

const course={
    coursename: "JS",
    price:"1000",
    courseInstructor:"hitesh"
}

const {courseInstructor}= course;
console.log(courseInstructor); // hitesh

const {courseInstructor: instructor}= course; // renaming while destructuring
console.log(instructor); // hitesh

const navbar=({company})=>{    //instead of using props
    // this is destructuring
}

navbar(company="Google")


// API  - api we can get in form of array or object 
// if in array format its present in []
// if in object format its present in {}

// {
//     "name":"purva",  this is json object
//     "courseName":"JS",
//     "price ":"1000"
// }

