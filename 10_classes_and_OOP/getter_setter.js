// Modern Syntax

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return `${this._email} is registerd.`
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `KadLSDFa1RA2${this._password}#1aas2w`.toUpperCase()
    }

    set password(value) {
        this._password = value
    }

}

const userOne = new User('h@gamil.com', 'hammad173')
// console.log(userOne.email)
// console.log(userOne.password)
