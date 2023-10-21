//**Higher Order Loops */

const coding = ['js', 'Java', 'ruby', 'python', 'cpp']

// coding.forEach(function (item) {
//     console.log(item);
// })

//? Using arrow functions
// coding.forEach((item) => {
//     console.log(item);
// })

// function printme(item) {
//     console.log(item);
// }

// coding.forEach(printme)
///--------------******************************************************************

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// js 0['js', 'Java', 'ruby', 'python', 'cpp']
// Java 1['js', 'Java', 'ruby', 'python', 'cpp']
// ruby 2['js', 'Java', 'ruby', 'python', 'cpp']
// python 3['js', 'Java', 'ruby', 'python', 'cpp']
// cpp 4['js', 'Java', 'ruby', 'python', 'cpp']

///--------------******************************************************************


//**By this we can loop through an ARRAY AND OBJECTS TO FIND A VALUE  */
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "pyton",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(`${item.languageName}`);
})