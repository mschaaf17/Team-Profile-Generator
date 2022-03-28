const Engineer = require('../lib/Engineer')

test("gets employees name", () => {
    const engineer = new Engineer('maddy', 5, '@', 'engineer', 'mschaaf17');
  
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
  });

  test("gets employees id", () => {
    const engineer = new Engineer('maddy', 5, '@', 'engineer', 'mschaaf17');
  
    expect(engineer.getId()).toEqual(expect.any(Number))
  });
  

  test("gets employees email", () => {
    const engineer = new Engineer('maddy', 5, '@', 'engineer', 'mschaaf17');
  
    expect(engineer.getEmail()).toContainEqual(expect.stringContaining('@'));
  });


  test("gets employees role", () => {
    const engineer = new Engineer('maddy', 5, '@', 'engineer', 'mschaaf17');
  
    expect(engineer.getRole()).toBe('engineer');
  });

  test('gets engineers github', () => {
    const engineer = new Engineer('maddy', 5, '@', 'engineer', 'mschaaf17')
    expect(engineer.getGithub()).toBe('mschaaf17');
  });


