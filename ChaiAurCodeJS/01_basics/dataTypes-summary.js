//JS is a Dynamically 

// Primitive


// 7 types: String, Number, Boolean, null, undefined, Symbol(Unique value), BigInt 

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);
// console.log(id === anotherId);

// Reference(Non-Primitive)

// Arrays, Objects, Functions

// const heros = ["shark", "spider", "lion"] // Arrays

// const animals = { name: "Kuldeep, age: 27" } // objects // Key-value pair

// const myFunction = function () {
//     console.log("Hello");
// }





//    Memory (Heap and Stack)

// Stack
// Primitive data types and references
// Size is known at compile time 
// Fixed memory allocated

// Heap
// Objects and functions
// Size is known at run time
// No limit for object memory


// Stack(Primitives uses stack)
// Heap(Non-primitives uses heap)

let myYoutubeName = "Kuldeep"
let anotherName = myYoutubeName
anotherName = "abhishek"

console.log(myYoutubeName)
console.log(anotherName);

let user1 = {
    email: "yada@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "kuldeep@googe.com"

console.log(user1.email);
console.log(user2.email);