// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task: DB calls, Cryptography, Network calls etc
//     setTimeout(() => {
//         console.log('Asnc Task is completed.')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(() => {
//     console.log('Promise consumed.'); // ye kabhi bhi pehle nhi hoga.
// }) // iska relation seedha resolve ke sath hota hai.

// Can also be written as

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Hammad here.')
//         resolve();
//     }, 1000)

// }).then(() => {
//     console.log('task resolved!')
// })

// Passing data 

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({userName: "Hammad", email: "hello@gamil.com"})
//     }, 1000)
// })

// promiseThree.then((userInfo) => {
//     console.log(userInfo)
// })


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (error != true) {
//             resolve({username: 'Hammad', password: '123'})
//         } else {
//             reject('ERROR: Something went wrong.')
//         }
//     }, 1000)
// })

// promiseFour
// .then( (user) => {
//     console.log(user);
//     return user.username
// } )
// .then( (username) => {
//     console.log(username)
// } )
// .catch( (error) => {
//     console.log(error)
// } )
// .finally( () => {
//     console.log('The promise was either resolved or rejected.')
// } )

// const promiseTask = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let password = '13'
//         if (password === '123') {
//             resolve({userName: 'Hammad324', repoCount: 14})
//         } else {
//             reject("ERROR: Password incorrect.")
//         }
//     }, 1000)
// })

// promiseTask
// .then((user) => {
//     //console.log(user)
//     console.log(`Welcome, ${user.userName}`)
// })
// .then(() => {
//     setTimeout(() => {
//         console.log(`Would you like to subscribe to our new feature..`)
//     }, 2000)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('Finally everything is executed.')
// })

// async/await

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true;
//         if (!error) {
//             resolve({name: "JavaScript", email: "Js@gamil.com"})
//         } else {
//             reject('ERROR: Something went wrong.')
//         }
//     }, 1000)
// });

// // .then() and .catch() ki tarah hi async/await hota hai.

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// fetching response.

// async function getAllUsers() {
//     try {
//         //const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const response = await fetch('https://api.github.com/users/Hammad324')
//         const data = await response.json() 
//         // ye bhi json mien convert hone mein time leta hai isliye isko await mien dalna zaroori hai.
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }

// getAllUsers();

// same thing with .then().catch

// fetch('https://api.github.com/users/Hammad324')
// .then((response) => {
//     //response.json
//     return response.json();
// })
// .then((data) => {
//     console.log(data)
//     console.log(`My bio: ${data.bio}`)
// })
// .catch((err) => {
//     console.log('ERROR: Something went wrong.')
// })

// agar poori file mien code ko mien comment na karun to bhi fetch hi sab se pehle run hoga kiun ke hum ne parha tha ke fetch jab call ban ke jata hai to uski alag high priority queue (micro task queue) hoti hai. isko sab se end mein call stack mein add kia jata hai or sab se pehel execute kia jata hai because stack mein hamein pta hia ke last in first out banta hai.

// agar promise se fetch request karte hain or error 404 ata hai to woh ik response hi count hota hai matlab resolve mien ata hai, sirf us surat mein error dega ya reject mein ayega jab request send hi na karpaya ho somehow.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({name: 'Hammad', dept: 'Physics'})
//             //return response;
//         } else {
//             reject('ERROR: Something went wrong.')
//         }
//     }, 1000)
// });

// .then((response) => {
//     console.log(response)
// })
// .catch((err) => {
//     console.log(err)
// })
// .finally(() => {
//     console.log('The promise is either completed or rejected.')
// })

// async function consumePromise() {
//     try {
//         const response = await promise
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise()


// console.log('Hello world');
// fetch('https://api.github.com/users/Hammad324')
// .then((response) => {
//     return response.json()
// })
// .then((response) => {
//     console.log(response.login, response.id)
// })
// .catch(() => {
//     console.log('ERROR 404')
// })
// .finally(() => {
//     console.log('All done')
// })

async function apiCall() {
    try {
        const request = await fetch('https://api.github.com/users/Hammad324')
        const response = await request.json()
        console.log(response.id)
    } catch (error) {
        console.log(error)
    }
}

apiCall();