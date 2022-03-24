const inquirer = require('inquirer')
const fs = require('fs')

function generateTeam() {
//this will generate the employee information
}

//questions to get the employee started 
const promptUser = EmployeeData => {
return inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    message: "What is your name? (Required)",
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
        type: 'list',
        name: 'role',
        message: 'What is your role?(Required)',
        choices: [{name: 'Manager', value: 0 }, {name: 'Intern', value: 1}, {name: 'Engineer', value: 2}]
        //based of this answer certain questions need to be prompted 
    }
])
.then((EmployeeData) => {
    if(EmployeeData.role === 0) {
        console.log('you are a manager!')
        managerQuestions()
    } else if 
        (EmployeeData.role === 1) {
            console.log('You are a intern')
            internQuestions()
        } else {
            console.log('You must be a engineer')
            engineerQuestions()
        }
    }
)
}
//set html for this user and then go to the correct team member questions 


//prompt manager questions
const managerQuestions = managerData => {
    return inquirer.prompt([
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
//set up html for this added user

const internQuestions = internData => {
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the intern's name? (Required)",
        validate:  nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name.");
                return false;
            }
            }
        },
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
        },
        {
            type: 'list',
            name: 'buildTeam',
            message: 'Pick a team member',
            choices: ['Engineer', 'Intern'],
            when: ({confirmBuildTeam}) => confirmBuildTeam
    
        }
    ])
    //if statment to return engineer, intern or no one

}
//set up html for this added user

//Engineer questions
const engineerQuestions = engineerData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if(githubInput) {
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
//set up html for this added user



promptUser()
.then (EmployeeData => {
fs.writeFile('./index.html', JSON.stringify(EmployeeData, null, '\t'), err => {
if (err) throw new Error (err);
console.log('html created')
})
})

 module.exports = promptUser
