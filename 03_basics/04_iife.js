// Immediately Invoked Function Expressions (IIFE)

(function chai() { // Named IIFE
    console.log("chai")
}) ();

// semi-colon nhi lagayenge to ye execute to hojata hai magar isko ye nhi pta ke khan rukna hai, to ye hum khud end karte hain.
// global scope ke declaration ya pollution se bachne ke liye IIFEs use kiye jate hain.

// with arrow function.

( (name) => { // simple/ unnamed IIFE
    console.log(`Welcome, ${name}.`)
} ) ("Hammad");

