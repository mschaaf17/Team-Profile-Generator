const Employee = require('../lib/Employee')


test("gets employees name", () => {
    const employee = new Employee('maddy', 5, '@', 'manager');
  
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
  });

  test("gets employees id", () => {
    const employee = new Employee('maddy', 5, '@', 'manager');
  
    expect(employee.getId()).toEqual(expect.any(Number))
  });
  

  test("gets employees email", () => {
    const employee = new Employee('maddy', 5, '@', 'manager');
  
    expect(employee.getEmail()).toContainEqual(expect.stringContaining('@'));
  });


  test("gets employees role", () => {
    const employee = new Employee('maddy', 5, '@', 'manager');
  
    expect(employee.getRole()).toBe('manager');
  });