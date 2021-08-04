const EmployeeFactory = require('./employee_factory');

const manager = (new EmployeeFactory).createManager("Difa");

const staff = (new EmployeeFactory).createStaff("Al Fansha");

console.log({ manager, staff });

const AnimalFactory = require('./animal_factory');

const tiger = (new AnimalFactory).create("tiger");
const cat = (new AnimalFactory).create("cat");
const dog = (new AnimalFactory).create("dog");

console.log({
    tiger, cat, dog
});