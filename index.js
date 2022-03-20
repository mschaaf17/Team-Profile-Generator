const inquirer = require('inquirer')
const fs = require('fs')

const promptUser = EmployeeData => {
return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is your team manager's name? (Required)",
    validate:  nameInput => {
        if(nameInput) {
            return true;
        } else {
            console.log('Please enter your name.');
            return false;
        }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is your employee ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?(Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else { 
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?'
    },
    {
        type: 'confirm',
        name: 'confirmBuildTeam',
        message: 'Would you like to build your team?',
        default: false
    },
    {
        type: 'list',
        name: 'buildTeam',
        message: 'Pick a team member',
        choices: ['Engineer', 'Intern'],
        when: ({confirmBuildTeam}) => confirmBuildTeam

    }
])
}

promptUser()
.then (EmployeeData => {
fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
if (err) throw new Error (err);
console.log('html created')
})
})
