const CustomersBuilder = require('./customer_builder');
const Customers = require('./customers');

const customers1 = (new CustomersBuilder())
    .setId('1')
    .setFirstName("Difa")
    .setLastName("Al Fansha")
    .setEmail("difaal21@gmail.com")
    .setPhoneNumber('08123456789')
    .build();

console.log(customers1)