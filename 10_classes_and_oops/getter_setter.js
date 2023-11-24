class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        return this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}Kuldeep`
    }

    set password(value) {
        this._password = value.toUpperCase()
    }
}

const kuldeep = new User("kul@gmail.com", "abc")
console.log(kuldeep.password);
console.log(kuldeep.email);