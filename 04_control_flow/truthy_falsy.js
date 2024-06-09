// truthy and falsy values.

// assuming ke string ke andar jo valuw hai woh true ya false hai usko truthy and falsy kehte hain.

// eg:

//const userEmail = "h@gamil.com" // considered as true.
const userEmail = "" // considered as false .

if (userEmail) {
    console.log("Got user email.")
} else {
    console.log("Don't have user email.")
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} is tarha ke function ko empty function kehte hain.


// checking array 

const userEmail1 = []

if (userEmail1.length === 0) {
    console.log("Array is empty");
}

//checking empty object

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) { // Object.keys() returns an array
    console.log("Object is empty.")
}

// Nullish Coalescing Operator (??): null, undefined

// used as a safety check for null or undefined.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator

//condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80.") : console.log("More than 80.");