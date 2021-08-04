class Customers {
    constructor(id, firstName, LastName, email, phoneNumber, age) {
        this.id = id;
        this.firstName = firstName;
        this.LastName = LastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.age = age;
    }

    getId() {
        return this.id;
    }

    getFirstName() {
        return this.firstName;
    }

    getLasName() {
        return this.LastName;
    }

    getEmail() {
        return this.email;
    }

    getPhoneNumber() {
        return this.phoneNumber
    }
}

module.exports = Customers;