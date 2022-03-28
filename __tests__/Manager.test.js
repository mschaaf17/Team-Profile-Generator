const Manager = require('../lib/Manager')


test("gets employees name", () => {
    const manager = new Manager('maddy', 5, '@', 'manager', 1);
  
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
  });

  test("gets employees id", () => {
    const manager = new Manager('maddy', 5, '@', 'manager', 1);
  
    expect(manager.getId()).toEqual(expect.any(Number))
  });
  

  test("gets employees email", () => {
    const manager = new Manager('maddy', 5, '@', 'manager', 1);
  
    expect(manager.getEmail()).toContainEqual(expect.stringContaining('@'));
  });


  test("gets employees role", () => {
    const manager = new Manager('maddy', 5, '@', 'manager', 1);
  
    expect(manager.getRole()).toBe('manager');
  });

  test('gets managers office number', () => {
    const manager = new Manager('maddy', 5, '@', 'manager', 1)
    expect(manager.getOffice()).toEqual(expect.any(Number))
  });