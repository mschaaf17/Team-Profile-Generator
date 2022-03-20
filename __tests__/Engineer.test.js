const Engineer = require('../lib/Engineer')
test('clones the array', () => {
    const array = [1, 2, 3]
    expect(Engineer(array)).toEqual(array)
    expect(Engineer(array)).not.toBe(array)
    
})


