// OLD METHODS

// Properties based getters and setters 

function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {

        get: function() {
            return this._email.toUpperCase()
        },
        
        set: function(value) {
            this._email = value
        }

    })

    Object.defineProperty(this, 'password', {

        get: function() {
            return this._password.toUpperCase()
        },

        set: function(value) {
            this._password = value
        }

    })
}

const userOne = new User('h@gamil.com', 'pas123')
console.log(userOne.email)
console.log(userOne.password)