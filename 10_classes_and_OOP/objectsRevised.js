// har ik cheez JS mein object hai or jo properties object ke pas available hain woh array and strings balke sab ke pas hai woh alag bat hia ke use ho na ho.

// function function bhi hai or object bhi ik object hi hai
// In JavaScript, functions are first-class objects, which means they can have properties just like any other object.

function twice(num) {
    return num ** 2
};

twice.power = 2;

// console.log(twice(5))
// console.log(twice.power)

// However, it's important to note that this doesn't affect the behavior of the twice function itself. It's just adding a custom property to the function object.

// console.log(twice.prototype)

//  In JavaScript, every function has a prototype property, which is mainly used when that function is used as a constructor function (i.e., with the new keyword). 

// .this === jis ne bhi bulaya hai uske pas chale jao.

function user(name, points) {
    this.name = name
    this.points = points
}

user.prototype.incrementPoints = function() {
    this.points += 1
    return this.points
}

const user1 = new user('Guts', 10)
const user2 = new user('Griffith', 21)

console.log(user1.incrementPoints())
console.log(user2.incrementPoints())

/* 

Instance Creation: When you create instances of user using user('Guts', 10) and user('Griffith', 21), you're actually calling the user function as a regular function, not as a constructor function. In JavaScript, when you call a function without new, this inside the function refers to the global object (in non-strict mode) or undefined (in strict mode), rather than creating a new object.

Undefined Property Assignment: Since this inside the user function refers to the global object (or undefined in strict mode), you're actually setting name and points properties on the global object, rather than creating properties on the instances of user. 

*/

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/