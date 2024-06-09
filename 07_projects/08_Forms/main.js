const submit = document.querySelector('#submit')
let users = []
const userID = '#user' + Math.floor(Math.random() * 15234)

//console.log(userID)

submit.addEventListener('click', (e) => {
    e.preventDefault()

    const username = document.querySelector('#username').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const user = newUser(userID, username.trim(), email.trim(), password.trim())
    
    if (username === '' || email === '' || password === '') {
        alert('Fill all fields please.')
        return
    }

    users.push(user)

    //console.log(user)
    console.log(users)

    //clearAll()
    congrats(username, userID)
})

const newUser = (userID, username, email, password) => {
    class User {
        constructor(userID, username, email, password) {
            this.userID = userID
            this.username = username
            this.email = email
            this.password = password
        }
    }

    let newUser = new User(userID, username, email, password)

    return newUser
}

// const clearAll = () => {
//     username.value = ''
//     email.value = ''
//     password.value = ''
// }

const congrats = (username, userID) => {
    document.querySelector('.form').remove()
    const h2 = document.createElement('h2')
    h2.style.textAlign = 'center'
    h2.innerHTML = `Welcome, ${username} your userID is ${userID}`
    document.body.appendChild(h2)
}


