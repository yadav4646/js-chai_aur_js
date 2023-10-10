const name = 'Kuldeep Yadav '
const repo = 50

// console.log(name + repo + "  Value");

// We should always use baptics

// console.log(`Hello my name is ${name} and my repo count is ${repo} value`);

const gameName = new String("Kuldeep-hc-com")

// console.log(gameName);
// console.log(gameName[0]);  //k
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // This will not change the original string because it is stored in heap
// console.log(gameName.charAt(6)); //p 
// console.log(gameName.indexOf("p")); // 6

// When we want to break the string in parts

// const newString = gameName.substring(0, 4)  // Last value is not included
// console.log(newString);

// const anotherString = gameName.slice(-4, 4); // We can use the -value, this can be used to search in reverse order
// console.log(anotherString);

// const newStringOne = "    Kuldeep  " // trim to remove spaces
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://Kuldeep.com/kuldeep%20yadav"
console.log((url.replace("%20", "-")))//When you want to replace a specific character

console.log((url.includes("Kuldeep"))); // When we want to check if that url has a specific word 
console.log((url.includes("harsh")));

// When we want to convert a string into a array based on a character

console.log(gameName.split("-")); //split by dashes 