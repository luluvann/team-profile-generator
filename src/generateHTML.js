const Classes = require("../lib/Classes");

function generateCard(employee) {
  let newEmployee = new Classes.Employee(
    employee.name,
    employee.ID,
    employee.email
  );

  let newManager = new Classes.Manager(employee.number);

  let newEngineer = new Classes.Engineer(employee.github);

  let newIntern = new Classes.Intern(employee.school);

  return `
        <div class="card">
                <div class="cardHeader">
                    ${newEmployee.getName()}
                    ${employee.type === "Manager" ? newManager.getRole() : ""}
                    ${employee.type === "Engineer" ? newEngineer.getRole() : ""}
                    ${employee.type === "Intern" ? newIntern.getRole() : ""}
                </div>
                <div class="cardBody">
                    ${newEmployee.getId()}
                    ${newEmployee.getEmail()}
                    ${
                      employee.type === "Manager"
                        ? newManager.getOfficeNumber()
                        : ""
                    }
                    ${
                      employee.type === "Engineer"
                        ? newEngineer.getGithub()
                        : ""
                    }
                    ${employee.type === "Intern" ? newIntern.getSchool() : ""}
                </div>
            </div>
        `;
}

function generateHTML(employeesList) {
  let cards = "";

  for (let i = 0; i < employeesList.length; i++) {
    cards += generateCard(employeesList[i]);
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h2>My Team</h2>
        </header>
        <main> 
            ${cards}
        </main>
    </body>
    </html>
        `;
}

module.exports = generateHTML;
