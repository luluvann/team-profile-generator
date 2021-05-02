const Classes = require('../lib/Classes.js');

test('creates an employee object', () => {
    const employee = new Classes.Employee('Pam','123','pam@dundermifflin');
  
    expect(employee.employeeName).toBe('Pam');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('pam@dundermifflin');
  });