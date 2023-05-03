const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Steve', 'Manager', '863445', 'steve@company.com', '8677344434');

    expect(manager.name).toBe('Steve');
    expect(manager.role).toBe('Manager');
    expect(manager.id).toBe('863445');
    expect(manager.email).toBe('steve@company.com');
    expect(manager.phone).toBe('8677344434');
});