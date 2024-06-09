// const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descripter)

// console.log(Math.PI)

// is tarah ki properties hum bhi define karsakte hian 

const chai = {
    name: 'cardamom tea',
    price: 150,
    isAvailable: true,

    orderChai: function() {
        console.log('Booo!')
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

//     value: 'cardamom tea',
//     writable: true,
//     enumerable: true,
//     configurable: true
//}

// is tarah se hum apne objects mein kuch values dusron ke liye disable karsakte hian take woh change na karsakein.

// to deifne properties.

Object.defineProperty(chai, 'price', { // because name pe lagya hia to isi liye sirf ye hi nhi chalega.
    writable: false,
    //enumerable: false,
    // ab price ki  value change nhi hogi  
})


// console.log(Object.getOwnPropertyDescriptor(chai, 'name')) 
// {
//     value: 'cardamom tea',
//     writable: false,
//     enumerable: false,
//     configurable: true
//}


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)   
    }
}