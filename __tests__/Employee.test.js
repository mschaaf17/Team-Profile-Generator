const Employee = require('../lib/Employee')

test('should be a string displaying employees name', () => {
expect(Employee()).toEqual(expect.stringContaining(employeeData.name.toString()))
})
