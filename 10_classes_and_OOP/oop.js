const user = { // this is called as the object literal.
    username: "Hammad",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(`Hello, ${this.username}`)
        //return this // this will show everything in the current object.
    }
}

const user2 = { // this is called as the object literal.
    username: "Hammad",
    loginCount: 8,
    signedIn: true,
    
    getUserDetails: function() {
        console.log(`Hello, ${this.username}`)
        //return this // this will show everything in the current object.
    }
}

// .this shows current context

// console.log(this, 'This shows an empty array') // global scope mein node environment mien empty hota hai lekin browser mein window object milta hai.

// console.log(user.username)
// console.log(user.getUserDetails())

// constructor function. (new)

function User(username, loginCount, signedIn) {
    this.username = username // passing Value, this wala apna variable hai
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greetings = function () {
        console.log(`Welcome, ${this.username}`)
    }

    return this // agar nhi bhi return karo ge to bhi ye implicitly return hota hia lekin likna acha rehta hai.
}

const userOne = new User('Hammad', 12, true) // jab new use kareinge to inke apne apne instances ban jayenge.
const userTwo = new User('JavaScript', 2, false)

//console.log(userOne) 
//console.log(userTwo) 
// values over write karke userTwo ki daldi.

// jab new keyword use karte hain to ik empty object create hota hai jisko instance bola jata hai.
// phir constructor function bhi call hota due to new keyword.
// is step mein jitne bhi arguments wagera hote hain woh .this mein inject hojate hain.
// you get the values.

// {Creation of an empty object.
// A constructor function is called.
// Arguments are passed in the .this.
// You get all the values.} 

//console.log(userOne.constructor) // [Function: User]
// syntax
// object instanceof constructor
// console.log(userOne instanceof User)


// function student (id, name, dept) {
//     this.id = id;
//     this.name = name;
//     this.dept = dept;

//     return this
// }

// const student1 = new student(21016, "Hammad", 'Physics')
// const student2 = new student(21132, "Faizan", 'CIS')

// console.log(student1)
// console.log(student2)

// function games(title, genre, releaseDate) {

//     this.title = title;
//     this.genre = genre;
//     this.releaseDate = releaseDate

//     return this

// }

// const game1 = new games("Counter-Strike Global Offensive", 'FPS', 2012)
// const game2 = new games("Grand Theft Auto V", 'Open World', 2013)

// console.log(game1)
// console.log(game1)

function userInfo(userID, userName, password){

    this.userID = userID
    this.userName = userName
    this.password = password

    return this

}

const firstUser = new userInfo('sick234', 'Hammad', 'pas1234'); 
const anotherUser = new userInfo('kelVin4', 'Nick', '1011pas');

console.log(firstUser)
console.log(anotherUser)