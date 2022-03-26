const inquirer = require('inquirer')
const fs = require('fs')
const createPage = require('../lib/page-template')
const teamPage = require('../lib/fileWritePage');


// const managerQuestions = require('./Manager')
// const internQuestions = require('./Intern')
// const engineerQuestions = require('./Engineer')

//inital function to generate the employee 

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
            choices: [{ name: 'Manager', value: 0 }, { name: 'Intern', value: 1 }, { name: 'Engineer', value: 2 }]
            //based of this answer certain questions need to be prompted 
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
        //create new class-- manager.js make a new manager and then push the manager 
        //console.log(EmployeeData)
        //can i use employee if exported from index?
        employees.push(managerData);
        if (managerData.confirmBuildTeam) {
            return promptUser()
        } else {
            return EmployeeData
        }
        
    })
    // .then(EmployeeData => {
    //     fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
    //         if (err) throw new Error(err);
    //         console.log('html created')
    //     })
    // })
}


//promot intern questions
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
        //create new class-- manager.js make a new manager and then push the manager 
        console.log(EmployeeData)
        employees.push(internData);
         if (internData.confirmBuildTeam) {
             return promptUser()
         } else {
             return EmployeeData
         }
    }) 
    // .then(EmployeeData => {
    //     fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
    //         if (err) throw new Error(err);
    //         console.log('html created')
    //     })
    // })


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
        //create new class-- manager.js make a new manager and then push the manager 
        //this is now undefined!
        console.log(EmployeeData)
        employees.push(engineerData);
         if (engineerData.confirmBuildTeam) {
             return promptUser()
         } else {
             return EmployeeData
         }
    }) 
    // .then(EmployeeData => {
    //     fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
    //         if (err) throw new Error(err);
    //         console.log('html created')
    //     })
    // })
}











//set html for this user and then go to the correct team member questions 



//set up html for this added user


//set up html for this added user


//set up html for this added user

promptUser()
.then(EmployeeData => {
    return createPage(EmployeeData)
})
.then(pageHTML => {
    return teamPage(pageHTML)
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
 }) 
.catch(err => {
    console.log(err);
  })
    

module.exports = promptUser
