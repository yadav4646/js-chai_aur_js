class User {
    constructor(Username) {
        this.Username = Username;
    }

    logMe() {
        console.log(`Username is ${this.Username}`);
    }
}

class Teacher extends User {
    constructor(Username, email, password) {
        super(Username)
        this.email = email
        this.username = password
    }

    addCourse() {
        console.log(
            `A nwe course was added by ${this.Username}`
        );
    }
}


const chai = new Teacher("chai", "chai@gmail", "123")

chai.addCourse()
const masalaChai = new User("Kuldeep")
masalaChai.logMe()


console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);

