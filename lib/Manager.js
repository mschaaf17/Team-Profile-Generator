// const inquirer = require('inquirer')
// const fs = require('fs')
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(office = "") {
        super(office)
    }
}


module.exports = Manager