const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);   // Cant override

const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai nahi");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

////** */

Object.defineProperty(chai, "name", {
    // writable: false,
    // enumerable: false
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
    // console.log(`${key} : ${value}`);
}

