//**for of */
//? array specific loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//? Maps ?//  unique values always

const map = new Map()
map.set('In', 'India')
map.set('USA', 'United states of America')
map.set('FR', 'France')
map.set('In', 'India')

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// for (const [key, value] of map) {
//     console.log(key, ':- ', value);
// }

//for of loop on object  // This will not work

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':- ', value);
// }