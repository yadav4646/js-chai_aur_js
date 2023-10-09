// console.log("2" > 1);

// console.log(null > 0); false
// console.log(null == 0); false
// console.log(null >= 0); true //The reason is that an equality check == and comaprisions > <>= <= work differently. Comaparision convert null to a number, treating it as 0. THats why (3) null>=0 is true and (1) null>0 is false 


// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// === strict check:: comapre the datatypes also

console.log("2" == 2); true
console.log("2" === 2); false
