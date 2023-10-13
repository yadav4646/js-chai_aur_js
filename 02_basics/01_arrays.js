const myArr = [0, 1, 2, 3, 4, 5]

const myHeros = new Array(2, 3, 4, 5)

// console.log(myArr[1]);
// console.log(myHeros[2]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // we don't have to specify the element as it pops the last element 

// myArr.unshift(0)
// myArr.unshift(9)  //Unshift enters the element in the start and then the whole data of array is shifted +1
// myArr.shift() // Remove the first element 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));  // -1 means that the value is not there

// const newArr = myArr.join();   // join changes the int to string
// console.log(newArr);
// console.log(typeof newArr); //string


// console.log(myArr);

// ******************** Slice//Splice **************//

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);




