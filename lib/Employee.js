const inquirer = require('inquirer')
const fs = require('fs')
// const managerQuestions = require('./Manager')
// const internQuestions = require('./Intern')
// const engineerQuestions = require('./Engineer')


//can this let be apart of employees class? so i can use it to extend to other employees?
const employees = []

class Employee {
    constructor(name, id, email, role) {
    this.name = name;
    this.id = id
    this.email= email
    this.role = role
    }

    //functions to create a card for each employee?
    getName(name){
      return `
      <div class="border rounded">
			<div class="border bg-slate-300">
			<h1 class="p-3 text-[32px]" > ${EmployeeData.name}Name</h1>
			
		</div>
      `
    }


  getId(id) {
    return `
    <h2 class="p-3 text-[28px]">Role</h2>
			</div>
				<div class="text-[18px]">
				<p class="p-2">ID:${EmployeeData.id}</p>
		`
  }
    getEmail(email) {
      return `
    <a class="p-2" href ="${EmployeeData.email}">Email:</a>
				
    `}


    getRole(role) {
    return `
    <p class="p-2">Other--- school github or office #</p>
				</div>

  `
  } 

// //office number() and role overridden will be extends on employee for manager
// //
//     }
    
}

// const manager = new Employee('Mike', 1, 'mike@gmail')
// console.log(manager)
// //manager.getName()
    

// module.exports = {
//     promptUser,
//     employees,
//     Employee
// }