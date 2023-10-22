const myNums = [1, 2, 3]

//**reduce */

// const myTotal = myNums.reduce(function (acc, currentval) {
//     console.log(`acc ${acc} and curVal ${currentval}`);
//     return acc + currentval
// }, 0)

const myTotal = myNums.reduce((acc, currentval) => acc + currentval, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "movie dev course",
        price: 299
    },
    {
        itemName: "Data course",
        price: 2399
    }
]

// add all values

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);