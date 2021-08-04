const Employee = require('./employee');

class EmployeeFactory {
    createManager(name) {
        return new Employee(name, "Manager", 1000000)
    }
    createStaff(name) {
        return new Employee(name, "Staff", 500000)
    }
}

module.exports = EmployeeFactory;