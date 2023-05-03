const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Billy', '967987', 'i-billy@company.com', 'University of South Carolina');

    expect(intern.name).toBe('Billy');
    expect(intern.id).toBe('967987');
    expect(intern.email).toBe('i-billy@company.com');
    expect(intern.school).toBe('University of South Carolina');
});