// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myNewDate = new Date(2024, 7, 15, 12, 15);
console.log(myNewDate.toLocaleString());

// this is easy way to understand date and time
let getDate = new Date();
console.log(getDate.toLocaleString());

let myCreatedDate = new Date("08-15-2024");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newdate.getDay()}and the time is`

newDate.toLocaleString("default", {
  weekday: "long",
});
