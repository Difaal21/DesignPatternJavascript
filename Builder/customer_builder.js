const Customers = require('./customers');

class CustomersBuilder {

    setId(id) {
        this.id = id;
        return this;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
        return this;
    }

    setLastName(LastName) {
        this.LastName = LastName;
        return this;
    }

    setEmail(email) {
        this.email = email;
        return this;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    build() {
        return new Customers(
            this.id || 0,
            this.firstName || null,
            this.LastName || null,
            this.email || null,
            this.phoneNumber || null,
            this.age || 0
        )
    }
}

module.exports = CustomersBuilder;