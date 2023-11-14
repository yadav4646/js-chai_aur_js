function setUserName(username) {
    this.username = username;
    console.log("called");
}

function createUser(username, email, password) {
    // setUserName(username)
    //**If you want to hold a reference we have to use .call  */
    setUserName.call(this, username)

    this.email = email;
    this.password = password;
}

const chai = new createUser("Kuldeep", "gmail.com", "123")

console.log(chai); 