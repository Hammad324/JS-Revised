// ES6 ke bad ki kahani hai ye

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() { // custom method 1
        return `${this.password}abc`
    }

    changeUsername() { // // custom method 2
        return `${this.username.toUpperCase()}`
    }
}

const u1 = new User('Hammad', 'h@gamil.com', 'pas123')
// console.log(u1.encryptPassword())
// console.log(u1.changeUsername())
// console.log(u1)

// behind the scene 

function User1(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
} // ye hai to function lekin object ki tarah bhi behave karta hai to hum ismein apni properties or methods bhi inject karasakte hain prototype ke through.

User1.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User1.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

let p1 = new User1('chai', 'chai@gamil.com', '234')

console.log(p1.encryptPassword())
console.log(p1.changeUsername())