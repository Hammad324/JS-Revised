class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{ // extend is connecting Teacher to User
    constructor(username, email, password) {
        super(username) // this works as the call method
        this.email = email
        this.password = password
    }

    addCourse() {
        return `${this.username} has added a new course.`
    }
}

const userOne = new Teacher('Hammad', 'hammad@gamil.com', 'pass123')
// console.log(userOne)
// console.log(userOne.addCourse())

const userTwo = new User('newUser')
userTwo.logMe()
//userTwo.addCourse()
userOne.logMe()

//console.log(userOne === userTwo) // false
//console.log(userOne === Teacher) // false

// since yhan pe us class ka instance call hua wa hai is liye yhan false aya hai woh directly nhi ayi hai.

// agar humein ye check karna hota hia ke koi kisis ka instance hai to hum 'instanceof' use karte hain.

console.log(userOne instanceof Teacher) // true
console.log(userOne instanceof User) // true
console.log(userTwo instanceof Teacher) // false
console.log(userTwo instanceof User) // false