class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    // i want that a unique id is created when aa user is registered

    // uniqueID() {
    //     // we do not want to give access to this ID creation to an object that is instantiated by this class for that we use static
    //     const id = Math.floor(Math.random() * 23  + 1000)
    //     return `_${id}`
    // }

    static uniqueID() {
        // now it cannot be used by anyone 
        const id = Math.floor(Math.random() * 23  + 1000)
        return `_${id}`
    }
}

const userOne = new User('Hammad')
// console.log(userOne)
// console.log(userOne.uniqueID())

class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const userTwo = new Teacher('HammadNEW', 'h@gamil.com')
//console.log(userTwo.uniqueID()) // this object is initiated from the User class thus does not have the access to uniqueID() method.
//userTwo.logMe()
// console.log(userTwo instanceof Teacher) // true
// console.log(userOne instanceof Teacher) // false

// Practice

class Cat{
    constructor(catName) {
        this.catName = catName
    }

    static speak() {
        console.log(`${this.catName} says MEOW.`)
    }


}

// const pepper = new Cat('Pepper')
// pepper.speak()

// const salt = new Cat('Salt')
// salt.speak()

class location extends Cat{
    constructor(catName, location) {
        super(catName)
        this.location = location
    }

    tellLocation() {
        console.log(`${this.catName} is at ${this.location}.`)
    }
}

const ginger = new location('ginger', 'home')
console.log(ginger)
ginger.tellLocation()
// ginger.speak() // cannot use it because it is a static/ restricted method.

const walter = new location('walter', 'office')
console.log(walter)
walter.tellLocation()
// walter.speak() // cannot use because it is a static method.