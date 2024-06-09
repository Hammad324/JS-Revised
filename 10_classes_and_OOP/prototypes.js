// prototypes

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ['thor', 'falcon']

let heroPower = {
    thor: "hammer",
    falcon: "flying",

    getSpiderPower: function(){
        console.log(`falcon's power is ${this.falcon}`);
    }
}

Object.prototype.hammad = function() {
    console.log(`Hammad is present in all objects.`)
} // overall object pe hi hum ne ye method apply kardia hai jis ki wajah se ye sab ke pas available hoga.

// Array.prototype.heyHammad = function() {
//     console.log(`Hammad is ONLY present in arrays.`)
// }

// heroPower.hammad()
// myHeros.hammad()

//heroPower.heyHammad() 
// hum ne ye methid jo hai woh specifically arrays ke liye hi bnaya hai is liye ye objects pe nhi chale ga.
// myHeros.heyHammad()

const users = ['Hammad', 'Hassan']

// users.heyHammad()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // creating teaching tupport a refrence for TA support.
}

// zaroori nhi isko har bar andar likhe

Teacher.__proto__ = User // this is known as inheritane 

// this approach is outdated

// new syntax for inheritance

Object.setPrototypeOf(TeachingSupport, Teacher);

// const myName  = '    Hammad     ';

// String.prototype.trueLength = function() {
//     console.log(`${this}`)
//     console.log(`The true length of this word is ${this.trim().length}.`)
// }

// myName.trueLength();
// ' Pepper  '.trueLength();


const arr = [1, 3, 5, 6, 7] // add hammad in all arrays

Array.prototype.addHammad = function() {
    this.push('Hammad')
    console.log(this)
}

arr.addHammad()

const newArray = []
newArray.addHammad()

const anotherArray = ['thor', 'hulk']
anotherArray.addHammad()