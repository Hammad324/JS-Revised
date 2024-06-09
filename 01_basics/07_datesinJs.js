let myDate = new Date();

// console.log(myDate); 
// // 2024-02-08T12:55:57.762Z
// console.log(myDate.toString()); 
// // Thu Feb 08 2024 17:55:57 GMT+0500 (Pakistan Standard Time)
// console.log(myDate.toLocaleString()); 
// // 2/8/2024, 5:55:57 PM
// console.log(myDate.toJSON()); 
// // 2024-02-08T12:55:57.762Z
// console.log(myDate.toDateString()); 
// // Thu Feb 08 2024
// console.log(myDate.toLocaleDateString()); 
// // 2/8/2024
// console.log(myDate.toTimeString()); 
// // 17:55:57 GMT+0500 (Pakistan Standard Time)

// console.log(typeof myDate) // object

// Creating my own date 

//let myCreatedDate =  new Date(2023, 0, 12); 
// Months zero se start hote hain js mein.
//console.log(myCreatedDate.toDateString());

//let myCreatedDate =  new Date(2023, 0, 12, 12, 51);
//let myCreatedDate =  new Date("2024-02-12"); // YY-MM-DD
let myCreatedDate =  new Date("01-14-2023"); // MM-DD-YY
//console.log(myCreatedDate.toLocaleString())

// TimeStamps

let myTimestamp = Date.now(); // time is mein miliseconds mien mile ga
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// for converting into seconds 

//console.log("This is time is seconds: ", Math.floor(Date.now()/1000));


let newDate = new Date();
//console.log(newDate);
// since month starts with 0 in js isiliye confusion khatam karne ke liye +1 karte.
// console.log(newDate.getMonth() + 1); 
// console.log(newDate.getDay()); 
// console.log(newDate.getDate()); 
// console.log(newDate.getFullYear());

// newDate.toLocaleString('default', {
//     weekday: "long"
// });
