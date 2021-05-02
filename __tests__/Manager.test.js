const Classes = require('../lib/Classes.js');

test('creates a manager object', () => {
    const manager = new Classes.Manager('123-456-7890');
    expect(manager.number).toBe('123-456-7890');
  });