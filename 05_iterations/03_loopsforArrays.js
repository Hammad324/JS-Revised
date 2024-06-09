// for-of loop
// ye hamesha value dump kardeta hai

let myArray = [1, 2, 3, 4, 5];

for (const indexVal of myArray) {
    //console.log(indexVal)
}

const myStr = "Hammad!!";

for (const words of myStr) {
    //console.log(`The words are ${words}`)
}

// MAPS.

const map = new Map();

map.set('PK', "Pakistan")
map.set('UK', "United Kingdom")
map.set('FR', "France")

//console.log(map)

for (const [key, value] of map) { // array destructure kia hai is case mein.
    console.log(key, ':', value)
}

//map.forEach(item => console.log(item))

const myObj = {
    name: "Hammad",
    education: "BS Physics",
    
}

// for (const items of myObj) {
//     console.log(items)
// } ye nhi chalta hai objects mein

