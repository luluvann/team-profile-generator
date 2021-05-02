const Classes = require('../lib/Classes.js');

test('creates an intern object', () => {
    const intern = new Classes.Intern('Scranton Business School');
    expect(intern.school).toBe('Scranton Business School');
  });