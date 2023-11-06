const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task is completed");
        resolve()// Thats how we call out the resolve, then is catched
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise is consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async task 2 resolved");
})


//**How to get data from a promise */
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ Username: "Kuldeep", email: "k.gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        // let error = false;
        if (!error) {
            resolve({ userName: "Yadav", password: "Hello" })
        } else {
            reject("Error: something went wrong")
        }
    }, 2000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.userName;
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("All done");
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ userName: "Kuldeep", surName: "Yadav" })
        } else {
            reject("JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


//**How to get Data */
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('Error in data');
//     }
// }

// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {  // we are using this "then" because we have to handle the first then json() 
        console.log(data);
    })
    .catch((error) => {
        return console.log(error);
    })