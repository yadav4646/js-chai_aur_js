// singleton

// Object.create 


// Object Literals

const mySym = Symbol("key1")  //*If we want to use a symbol as a key to an object */


const jsUser = {

    name: "Kuldeep", //*** JS take Key as string 
    "full Name": "Kuldeep Yadav",
    [mySym]: "key2", //* [Symbol(key1)]: 'key2'
    age: 27,
    location: "Noida",
    email: "kuldeep.gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"],

};

// console.log(jsUser.name);
// console.log(jsUser["name"]); //**Use this as if when we have two letter key then we cannot put space in them without this */
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// jsUser.email = "Yadav@gmail.com"  //**Override a value */
// // Object.freeze(jsUser)  //** This is how we freeze an object */
// jsUser.email = "kuldeep@yahoo.com"
// console.log(jsUser);

//**How to add function in object */

jsUser.greeting = function () {
    console.log(`Hello Js user`);
}

jsUser.greetingtwo = function () {   //** When we want to bring a property form an object */
    console.log(`Hello Js user. ${this.name}`);  //**When we want to reference the same object we use {this} */
}

// console.log(jsUser["greeting"])
console.log(jsUser.greeting); //** [Function (anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());