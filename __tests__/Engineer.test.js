const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', '488677', 'dave@company.com', 'davecodes');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('488677');
    expect(engineer.email).toBe('dave@company.com');
    expect(engineer.github).toBe('davecodes');
});