//const inquirer = require('inquirer')
//const fs = require('fs')
// const managerQuestions = require('./Manager')
// const internQuestions = require('./Intern')
// const engineerQuestions = require('./Engineer')


//can this let be apart of employees class? so i can use it to extend to other employees?
//const employees = []

class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id
    this.email= email
    this.role = role
    }

    //functions to create a card for each employee?
    getName(){
     return this.id
    }


    getId() {
    return this.name
  }
    getEmail() {
      return this.email
    }

    getRole() {
    return this.role
  } 



// //office number() and role overridden will be extends on employee for manager
// //
//     }
    
}

// const manager = new Employee('Mike', 1, 'mike@gmail')
// console.log(manager)
// //manager.getName()
    

module.exports = Employee
