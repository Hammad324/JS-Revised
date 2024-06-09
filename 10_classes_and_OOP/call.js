// using call 

function setUserName(username) {
    // complex DB calls
    this.username = username
    //console.log(this function is called.)
}

function createUser (username, email, password) {

    //setUserName(username) // yhan sirf refrence gya hai call nhi hua hai function.

    setUserName.call(this, username) // call sirf refrence hold karne ke liye use hota hai. this setUserName wae function ko kehta hia ke this hmara wala use karo apna na karo kiunke apka wala this ghayab hojaeyga pehle execute hoke.

    this.email = email
    this.password = password
}

const user1 = new createUser('hammad', 'h@gamil.com', 'as123')
//console.log(user1);

// Another example for call 

// function person(firstName, lastName) {

//     this.firstName = firstName
//     this.lastName = lastName

//     fullName.call(this, firstName, lastName);
// }

// function fullName(firstName, lastName) {
//     this.fullName = firstName + ' ' + lastName
// } // this is executed before person construnctor isiliye us mein jitne bhi variables hain woh to ur gaye to isis liye nhi ans derha inshort hamein current context dena hoga.

// const p1 = new person('Hammad', 'Farrukh')
// const p2 = new person('Hassan', 'Farrukh')

// console.log(p1)
// console.log(p2)


// function fullNameof(fullName) {
//     this.fullName = fullName
//     console.log('done')
// }

// function person(firstName, lastName, fullName) {
//     fullNameof.call(this, fullName)
//     this.firstName = firstName
//     this.lastName = lastName
// }

// const p1 = new person('Hammad', 'Farrukh', 'Hammad Farrukh')
// console.log(p1)

// Another one

function Car(make, model, year) {
    this.make = make
    this.model = model
    this.year = year

    carDetails.call(this, make, model, year)
}

function carDetails(make, model, year) { // Calls a method of an object, substituting another object for the current object.
    this.details = `${make} ${model} was made in ${year}`
    //console.log(this.details)
    //return this.details
}

const car1 = new Car('Toyota', 'Camry', 2020) 
const car2 = new Car('Honda', 'Accord', 2013) 
console.log(car1)
console.log(car2)



