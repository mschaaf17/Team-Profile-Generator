const Intern = require('../lib/Intern')

test("gets employees name", () => {
    const intern = new Intern('maddy', 5, '@', 'intern', 'university');
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
  });

  test("gets employees id", () => {
    const intern = new Intern('maddy', 5, '@', 'intern', 'university');
  
    expect(intern.getId()).toEqual(expect.any(Number))
  });
  

  test("gets employees email", () => {
    const intern = new Intern('maddy', 5, '@', 'intern', 'university');
  
    expect(intern.getEmail()).toContainEqual(expect.stringContaining('@'));
  });


  test("gets employees role", () => {
    const intern = new Intern('maddy', 5, '@', 'intern', 'university');
  
    expect(intern.getRole()).toBe('intern');
  });

  test('gets interns school', () => {
    const intern = new Intern('maddy', 5, '@', 'intern', 'university')
    expect(intern.getSchool()).toBe('university');
  })