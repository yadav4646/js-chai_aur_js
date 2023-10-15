// Singleton

// const tinderUser = new Object()  //**This is a singleton Object */

let tinderUser = {} //**Non-Singleton */

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedIn = false

// console.log(tinderUser);

//**When we want to give objects on objects */

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Kuldeep",
            lastName: "Yadav"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName.firstName);

//**When we want to combine two objects */

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj5 = {
    5: "a",
    6: "b"
}

// const obe3 = { obj1, obj2 }  //**This is not how we can combine two objects */

const Obj3 = Object.assign(obj1, obj2, obj5)
// const Obj4 = Object.assign({}, obj1, obj2, obj5)  //**The reason why we use {} is  Object.assign(target, source)*/

// Spread can also be user
const obj6 = { ...obj1, ...obj2, ...Obj3 }
console.log(Obj3);
// console.log(Obj4);
console.log(obj6);


// when we receive the values by database, we usually get arrays of objects

const user = [
    {
        id: 1,
        email: "ts@gmail.com"
    },
    {
        id2: 2,
        email1: "asded@gmail.com"
    }
]

console.log((user[1].email));  // Undefined

console.log(tinderUser);

console.log(Object.keys(tinderUser));  //The output of this is an array, so we can loop in it if we want
console.log(Object.values(tinderUser));  //The output of this is an array, so we can loop in it if we want
console.log(Object.entries(tinderUser));  // key value pairs individual as an object

console.log(tinderUser.hasOwnProperty("isloggedIn"));

