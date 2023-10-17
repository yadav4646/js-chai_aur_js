// var c = 300
let a = 300
//***  {}  Scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);  //**Var can get out of the scope */ and if we use var c out of if statement then also it will go in the if statement


///*** Nested Scope */

function one() {
    const userName = "kuldeep"
    function two() {
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website); 

    two()

}

// one()

if (true) {
    const userName = "Kuldeep"
    if (userName === "Kuldeep ") {
        const website = "Youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}

// console.log(userName);


//**Intresting */

console.log((addOne(5)))
function addOne(num) {
    return num + 1
}
// addOne(5)


console.log(addTwo(5));  //**Cannot access 'addTwo' before initialization // This can be fixed by Hoisting
const addTwo = function (num) {
    return num + 2
}
addTwo(5)