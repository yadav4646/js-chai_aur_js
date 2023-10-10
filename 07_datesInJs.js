// Date

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString()); // Tue Oct 10 2023 23:30:45 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString()); // 10/10/2023
// console.log(myDate.toDateString()); // Tue Oct 10 2023
// console.log(typeof myDate); // Object because we are using new

// new date declare

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")  // To out date in a specific format
let myCreatedDate = new Date("01-14-2023")  // To out date in a specific format
// console.log(myCreatedDate.toLocaleString());

// Time-Stamps
// let myTimeStamps = Date.now()
// console.log(myTimeStamps);

// When we want to know the milliseconds or compare milliseconds

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay());
// console.log(`${newDate.getDate()} and the second is ${newDate.getSeconds()}`)

console.log((newDate.toLocaleString('default', { weekday: "long" })))

