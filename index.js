const inquirer = require('inquirer')
const fs = require('fs')
const createPage = require('./src/pageTemplate')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')


//can this let be apart of employees class? so i can use it to extend to other employees?
const employees = []

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
            choices: ['Manager', 'Intern', 'Engineer']
        
        }
        
    ])
        .then((EmployeeData) => {
            if (EmployeeData.role === 'Manager') {
                console.log('this employee is a manager!')
                managerQuestions(EmployeeData)
            } else if
                (EmployeeData.role === 'Intern') {
                console.log('this employee is an intern')
                internQuestions(EmployeeData)
            } else {
                console.log('this employee is an engineer')
                engineerQuestions(EmployeeData)
            }
        }
        )
}

//prompt manager questions
const managerQuestions = (EmployeeData) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?'
        },
        {
            type: 'confirm',
            name: 'confirmBuildTeam',
            message: 'Would you like to add to your team?',
            default: false
        }
    ]).then(managerData => {
       const manager = new Manager(EmployeeData.name, EmployeeData.id, EmployeeData.email, EmployeeData.role, managerData.office)
       console.log(manager) 
        employees.push(manager);
    //    }
    
        if (managerData.confirmBuildTeam) {
            return promptUser()
        } else {
            generateTemplate() 
           
        }
        
    })
}

//writing the information into the html page
        function generateTemplate() {
        const myTeamPage = createPage(employees)
        fs.writeFile('./dist/generatedPage.html', myTeamPage, err => {
            if (err) throw new Error(err);
            console.log('html created')
        })
    
    }

// //prompt intern questions
const internQuestions = (EmployeeData) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend?'
        },
        {
            type: 'confirm',
            name: 'confirmBuildTeam',
            message: 'Would you like to add to your team?',
            default: false
        }
    ]).then(internData => {
        const intern = new Intern(EmployeeData.name, EmployeeData.id, EmployeeData.email, EmployeeData.role, internData.school)
        employees.push(intern);
         if (internData.confirmBuildTeam) {
             return promptUser()
         } else {
            generateTemplate() 
         }
    }) 
   


}
 //Engineer questions
 const engineerQuestions = (EmployeeData) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your github username.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmBuildTeam',
            message: 'Would you like to add to your team?',
            default: false
        }
    ]).then(engineerData => {
        const engineer = new Engineer(EmployeeData.name, EmployeeData.id, EmployeeData.email, EmployeeData.role, engineerData.github)
        employees.push(engineer);
         if (engineerData.confirmBuildTeam) {
             return promptUser()
         } else {
            generateTemplate() 
         }
    }) 
   
}


 promptUser()

    

module.exports = promptUser

