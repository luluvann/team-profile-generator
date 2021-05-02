const Classes = require('../lib/Classes.js');

test('creates an engineer object', () => {
    const engineer = new Classes.Engineer('jimmy');
    expect(engineer.github).toBe('jimmy');
  });