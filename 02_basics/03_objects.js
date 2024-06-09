// objects can be declared using two methods:
// 1. Literal
// 2. Constructor

// SINGLETON (important)

// whenever an object is declared using a constructor then a singleton is created.
// "ye apne tarah ka ik ho object hai"
// in simple words single instance throughout the lifespan of an application.
//Object.create => constructor method


// object literals.

const mySym = Symbol("key1");
// to access a symbol in an objects we use [] notations

const jsUser = {
    name: "Hammad",
    "full name": "Hammad Farrukh",
    [mySym]: "mykey1", // agar [] nhi lagayenge symbol ke liye string ki tarah hi treat hoga ye
    age: 20,
    location: "Karachi",
    email: "hammad@gamil.com",
    isLogged: false,
    lastLoginDays: ['Monday', 'Saturday'],
}

// it can be accessed using two ways.

// console.log(jsUser.email); // by using dot notation.
// console.log(jsUser["email"]); // The keys are read as strings by JS.
// console.log(jsUser["full name"]); // by using square brackets [].
// console.log(jsUser[mySym]);

jsUser["email"] = "hammad@yohoo.com";

// console.log(jsUser["email"]);
// console.log(jsUser)
// for locking the values of an object we user .freeze.

// Object.freeze(jsUser);
// jsUser["email"] = "hammad@microsoft.com";
// console.log(jsUser); // values will not propogate i.e not change.

// adding function in an object

jsUser.greeting = function() {
    console.log("Hello, User");
}

//console.log(jsUser.greeting); // is case mien function ka refrence call hua hai function itself nhi call hua hai
// phele obj freeze kardia tha is liye nhi chal rha tha.

console.log(jsUser.greeting()); // yhan function itself call hua hai.

jsUser.greetingTwo = function() {
    console.log(`Hello, ${this.name}`); // object ke andar ki cheez ko refer karne ke lie .this use hota hai.
}

console.log(jsUser.greetingTwo());

// ziada tar dot notation se hi access karte hain object ke elements magar kuch special cases mein square brackets use karne parte hain.
