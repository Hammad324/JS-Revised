// OLD METHODS

// Objects based getters and setters 

const User = {
    _email: 'h@gmail.com',
    _password: 'pas123',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set password(value) {
        this._password = value
    },
}

const newObj = Object.create(User)
console.log(newObj.password)
console.log(newObj.email)