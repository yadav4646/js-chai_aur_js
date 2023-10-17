const user = {
    userName: "Kuldeep",
    price: 200,

    welcomeMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// console.log(this);


// function chai() {
//     let userName = "Kuldeeep"
//     console.log(this.userName);  //Undefined//* this can be used in object but not in standalone function
// }

// chai()

//**Arrow Functions */
// const chai = function () {
//     let userName = "Yadav"
//     console.log(userName);
// }

const chai = () => {
    let userName = "Yadav"
    console.log(userName);
}

// chai()
//**Explicit return */
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//**Implicit return */
// const addTwo = (num1, num2) => num1 + num2  //**Return is not required if used on the same line */
// const addTwo = (num1, num2) => (num1 + num2)  //**Return is not required if used on the same line */

//? When you want to return an Object
const addTwo = (num1, num2) => ({ userName: "Yadav" })   // If we don't use parenthesis the object will not return anything if we dont its gonna show undefined

console.log((addTwo(2, 3)));

const myArray = [2, 5, 7, 8]

// myArray.forEach(() =>)