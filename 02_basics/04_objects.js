//const tinderUser = new Object();
// singleton object

const tinderUser = {} // non-singleton user.

tinderUser.id = "id123";
tinderUser.name = "Yasir";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "somebody@gamil.com",
    fullName: {
        userFullName: {
            firstName: "Hammad",
            lastName: "Farrukh"
        }
    }
};

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.firstName);
// console.log(regularUser.fullName.userFullName.lastName);

// combinig objects

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d "
};

// const obj3 = { obj1, obj2 };
// is case mien arrays ki tarah hi hoga, jaise arrays mein array agayi thi waise hi ye bhi object mein object ajaeyga.

// the correct way to merge objects is.

//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
//console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 2,
//         email: "k@gmail.com"
//     },
//     {
//         id: 3,
//         email: "l@gmail.com"
//     },
// ]

// console.log(users[1].email); 

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // datatype array ata hai.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // not used very much

// console.log(Object.hasOwnProperty('isLoggedIn'));

// --------------------------------------------------------------------------

// Object destructuring

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Hammad Farrukh",
};

const {courseInstructor: instructor} = course; // rename kia hia isko

//console.log(courseInstructor);

//console.log(instructor);

// small talk about APIs

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

/* [
    {},
    {},
    {}
] */
