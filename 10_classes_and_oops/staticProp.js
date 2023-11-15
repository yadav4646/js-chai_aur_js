class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() { // static is used when we dont want the "method" to access
        return `123`
    }
}

const kuldeep = new User("kuldeep")
// console.log(kuldeep.createId());
// console.log(kuldeep.logMe());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone);
iphone.logMe();
console.log(iphone.createId());
