// Number

// const score = 400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString()); // When we check the typeOf of this we get String
// console.log(balance.toFixed(1));

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3));  //23.9

// const hunderds = 1000000
// console.log(hunderds.toLocaleString("en-IN"));



// Maths //

// console.log(Math);
// console.log(Math.abs(-5)); //Gives the positive value
// console.log(Math.round(5.4)); // Gives a round value
// console.log(Math.ceil(4.2)); // Takes the higher value
// console.log(Math.floor(4.9)); // Takes the lower value
// console.log(Math.min(4, 2, 1)); // Gives the lower value
// console.log(Math.max(4, 2, 1)); //Gives teh highest value

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // Round off


// When we want a value with a interval

const min = 10;
const max = 20;

console.log((Math.random() * (max - min + 1)));
// console.log(Math.floor((Math.random() * (max - min + 1))) + min);
// The code `console.log(Math.floor((Math.random() * (max - min + 1))) + min);` is used to generate a random integer between a specified minimum (`min`) and maximum (`max`) value, and then it logs (prints) that random integer to the console.
// Here's a step-by-step explanation of how this code works:
// 1. `Math.random()`: This part of the code generates a random floating - point number between 0(inclusive) and 1(exclusive).In other words, it returns a random number in the range`[0, 1)`.
// 2. `(max - min + 1)`: This part calculates the range of possible values we want for our random integer.It does so by taking the difference between the `max` and `min` values and adding 1 to it.The `+ 1` is added because we want to include both the `min` and `max` values in the range of possible outcomes.
// 3. `Math.random() * (max - min + 1)`: This part multiplies the random floating - point number generated in step 1 by the range calculated in step 2. This gives us a random floating - point number in the range`[0, max - min + 1)`.
// 4. `Math.floor(...)`: The `Math.floor` function is used to round down the floating - point number obtained in step 3 to the nearest integer.This ensures that the final result is an integer.
// 5. `+ min`: Finally, we add the `min` value to the result obtained in step 4. This ensures that the random integer falls within the desired range`[min, max]`.
//  So, when you execute this code, it will generate a random integer between `min` and`max`(inclusive), and then it logs that integer to the console using`console.log()`.This is a common way to generate random integers within a specified range in JavaScript.



