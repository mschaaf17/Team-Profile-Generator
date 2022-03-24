const index = require('../lib/index.js')

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id
    this.email= email
    this.getName = function (EmployeeData) {
        console.log(`it was created! for ${data.managerName}`)
    }
    }
    
}

const manager = new Employee(data.managerName)
console.log(manager)
//manager.getName()



//module.exports = Employee