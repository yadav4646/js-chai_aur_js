// **   Object Literal

const user = {
    userName: "Kuldee",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user Detials from database");
        // console.log(`UserName: ${this.userName}`); //we have to use this as we want to tell the function that we have are using this context to fetch
        // console.log(this);
    },
};

// console.log(user.userName)
// console.log(user.getUserDetails());
// console.log(this);

//**     Constructor function */  new   //**a constructor function is used to create objects*/

// const promiseOne = new Promise()
// const date = new Date()

function User(userName, loginCount, isLoggedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.userName}`);
    }

    // return this;
}

// const User1 = User("Kuldeep", 12, true);
// const User2 = User("yadav", 11, false);
// console.log(User2);

const User3 = new User("Kuldeep", 12, true);
// const User4 = new User("yadav", 11, false);
console.log(User3.constructor);
// console.log(User4);

//? new Keyword
// The new operator lets developers create an instance of a user - defined object type or of one of the built -in object types that has a constructor function.
/* When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:
Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)*/

// an empty object is created knows as instances
// constructor function is called by the use of new keyword
// this keyword puts all the arguments to the constructor function