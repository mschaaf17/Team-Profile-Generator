const inquirer = require('inquirer')
const fs = require('fs')
const managerQuestions = require('./Manager')
const internQuestions = require('./Intern')
const engineerQuestions = require('./Engineer')


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


//questions to get the employee started 
const promptUser = EmployeeData => {
  console.log('Please answer the questions to build your team.')
  return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: "Enter an employee's name. (Required)",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log("Please enter the employee's name.");
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "What is the employee's ID number?"
      },
      {
          type: 'input',
          name: 'email',
          message: "What is the employee's email address?(Required)",
          validate: emailInput => {
              if (emailInput) {
                  return true;
              } else {
                  console.log('Please enter your email address.');
                  return false;
              }
          }
      },
      {
          type: 'list',
          name: 'role',
          message: "What the employee's role?(Required)",
          choices: [{ name: 'Manager', value: 0 }, { name: 'Intern', value: 1 }, { name: 'Engineer', value: 2 }]
      }
      
  ])
      .then((EmployeeData) => {
          if (EmployeeData.role === 0) {
              console.log('this employee is a manager!')
              managerQuestions(EmployeeData)
          } else if
              (EmployeeData.role === 1) {
              console.log('this employee is an intern')
              internQuestions()
          } else {
              console.log('this employee is an engineer')
              engineerQuestions()
          }
      }
      )
}





promptUser()
    

module.exports = {
    promptUser,
    employees,
    Employee
}