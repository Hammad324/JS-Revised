/*
kis tarah se data ko memory mein rakha jata hai  or access kai
jata hai us basis pe data ke 2 categorization hain 
1. Primitive
2. Non-Primitive 
*/ 

// Primitive OR Call by value Type
// 7 types, these are call by value.

/* 
1. String,
2. Number,
3. Boolean,
4. Null,
5. Undefined, (is case mein memory and variable declared hote hain but value nhi hoti.),
6. Symbol (kisi bhi value ko unique bnane ke liye use kjia jata hai.),
7. BigInt (scintific or exceptionally large values.)
*/

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Non-Primitive OR Refrence type (memorey refrence dia jaata hai.)

/* 
1. Array,
2. Objects,
3. Functions
*/

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

/* JavaScript is a dynamically typed language, which means that 
data types of variables are determined by the value they hold at 
runtime and can change throughout the program as we assign 
different values to them. */

// ------------------------------------------------------------------------------------------------------------------

// Memories are of two types:
// 1. Stack (Primitive),
// stack mein jo variable ki value hoti hai uski copy milta hai.

let channelName = "Hammad's Channel.";
let anotherChannelName = channelName
anotherChannelName = "Another channel"

console.log(channelName);
console.log(anotherChannelName);


// 2. Heap (Non-Primitive).
// heap mein original value ka refrence milta hai.

/* let numbers = [1, 2, 3, 4, 5];
let anotherArray = numbers
anotherArray = [6, 7, 8, 9, 10];
console.log(numbers);
console.log(anotherArray); */

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne;
userTwo.email = "hammad@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);

