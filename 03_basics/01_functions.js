// console.log("K");
// console.log("u");
// console.log("l");
// console.log("d");
// console.log("e");
// console.log("e");
// console.log("p");

function sayMyName() {
    console.log("K");
    console.log("u");
    console.log("l");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("p");

}

// sayMyName();

// function addTwoNummber(number1, number2) {
//     console.log((number1 + number2)) //**If we dont use a return then we will not get anything out of that function */
//     return ((number1 + number2))
// }
function addTwoNummber(number1, number2) {

    let result = number1 + number2
    return result
    // console.log("Kuldeep"); //* Unreachale code as return has been used before this line
}
addTwoNummber()  // NaN
const result = addTwoNummber(3, 4)
// console.log("Result: ", result);  //undefined //**If we use return then only well get a result in console.log other we'll get undefined *

function loginUserMessage(username) {
    if (username === undefined) //**(!username) */ 
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kuldeep"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());

