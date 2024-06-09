// if 

// const welcomeUser = (name) => {
//     if(name === "Hammad") {
//         console.log(`Welcome, ${name}`)
//     } else {
//         console.log("Not Allowed")
//     }
// }

// welcomeUser("Hammad")
// welcomeUser("Hassan")

// <, >, <=, >=, ==, !=, ===, !==

// Temperature converter

// const celciusToKelvin = (tempInC) => {
//     let result = 273 + tempInC
//     return result
// } 

// const kelvinToCelcius = (tempInK) => {
//     let result = 273 - tempInK
//     return result
// }

// console.log(celciusToKelvin(10))
// console.log(kelvinToCelcius(273))

// let userChoice = 1; // enter 1 or 2, anything else will result in an error.

// if (userChoice === 1) {
//     const celciusToKelvin = (tempInC) => {
//         let result = 273 + tempInC
//         return result
//     } 
//     console.log(`The temperature in kelvin is ${celciusToKelvin(10)}`)
// } else if (userChoice === 2) {
//     const kelvinToCelcius = (tempInK) => {
//         let result = 273 - tempInK
//         return result
//     }
//     console.log(`The tremperature in celcius is ${kelvinToCelcius(273)}`)
// } else {
//     console.log("Wrong input.")
// }

// const score = 50;

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`); // ye incurly braces se bahir likhne pe error de ga.
// } else {
//     console.log(`You do not have enough score.`)
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course.")
// }

// if (loggedInFromGoogle || loggedInfromEmail) {
//     console.log("You can login.")
// }