let myDate = new Date();  // creates a new date object with current date and time
console.log(myDate); // current date and time

console.log(myDate.toString());//converts date to string format
console.log(myDate.toDateString()); // converts date to a more readable string format
console.log(myDate.toISOString()); // converts date to ISO standard format
console.log(myDate.toLocaleDateString());     // converts date to locale specific date format
console.log(myDate.toLocaleTimeString());//    converts date to locale specific time format

console.log(myDate.getFullYear()); // gets the year
console.log(myDate.getMonth()); // gets the month (0-11)
console.log(myDate.getDate()); // gets the day of the month (1-31)
console.log(myDate.getDay());


const NewDate= new Date(2025, 0, 11); // month is 0-indexed so 0 means January=> (year, month, day)
console.log(NewDate.toDateString());

const NewDate2= new Date(2025, 0, 11, 10, 30, 50); // (year, month, day, hours, minutes, seconds)
console.log(NewDate2.toString());

const NewDate3= new Date("2025-11-29");
console.log(NewDate3.toDateString());
console.log(NewDate3.getTime()); // gets the timestamp in milliseconds since January 1, 1970

const getMyTime = Date.now(); // gets the current timestamp in milliseconds since January 1, 1970
console.log(getMyTime);


console.log(Math.floor(Date.now()/1000));

console.log(NewDate.toLocaleString('default', {timeZone: 'Asia/Kolkata', weekday:"long"})); // converts date to locale specific date and time format based on timezone