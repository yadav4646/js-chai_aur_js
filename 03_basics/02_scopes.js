// var c = 300
let a = 300
//***  {}  Scope
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner:", a);
}

console.log(a);
// console.log(b);
// console.log(c);  //**Var can get out of the scope */ and if we use var c out of if statement then also it will go in the if statement
