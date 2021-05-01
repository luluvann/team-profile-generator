const inquirer = require("inquirer");
const fs = require("fs");

/* arrays of questions */
const initialQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name? :",
  },
  {
    type: "input",
    name: "ID",
    message: "What is the team manager's ID? :",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email? :",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's office number? :",
  },
  {
    type: "list",
    name: "teamMemberAdd",
    message: "Which type of team member would you like to add? :",
    choices: [
      "Intern",
      "Engineer",
      "I don't want to add any more team members",
    ],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your intern's name? :",
  },
  { type: "input", name: "ID", message: "What is your intern's ID? :" },
  {
    type: "input",
    name: "email",
    message: "What is your intern's email? :",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school? :",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name? :",
  },
  {
    type: "input",
    name: "ID",
    message: "What is the engineer's ID? :",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email? :",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username? :",
  },
];

const newEmployee = [
  {
    type: "confirm",
    name: "addNewEmployee",
    message: "Would you like to add another employee? :",
  },
];

/* end arrays of questions */

function writeToFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}.html`, generateHTML(data), (err) => {
    if (err) throw err;
    console.log(
      "HTML and CSS files have been generated! Check out the 'dist' folder to see the output!"
    );
  });
}

function init() {
  return inquirer.prompt([...initialQuestions]);
}

function promptEngineer(employeesList) {
  return inquirer
    .prompt([...engineerQuestions])
    .then((engineerData) => {
     employeesList.push(engineerData)
     employeesList[employeesList.length - 1].type = "Engineer"
     return employeesList
    })
    .then( employeesList => promptAddNewTeamMember(employeesList));
}

function promptIntern(employeesList) {
  return inquirer
    .prompt([...internQuestions])
    .then((internData) => {
      employeesList.push(internData)
      employeesList[employeesList.length - 1].type = "Intern"
      return employeesList;
    })
    .then( employeesList => promptAddNewTeamMember(employeesList));
}

function promptAddNewTeamMember(employeesList) {
  return inquirer.prompt([...newEmployee]).then((answer) => {
    if(answer.addNewEmployee){
     return inquirer.prompt([
      {
        type: "list",
        name: "teamMemberType",
        message: "Which type of team member would you like to add? :",
        choices: [
          "Intern",
          "Engineer",
          "I don't want to add any more team members",
        ],
      } 
     ]).then(answerTypeTeamMember => {
       if(answerTypeTeamMember.teamMemberType === "Intern"){
         return promptIntern(employeesList)
       } else if (answerTypeTeamMember.teamMemberType === "Engineer"){
         return promptEngineer(employeesList)
       }
     })
    } else {
      console.log(employeesList)
      return employeesList
    }
  });
}


/* initial prompt */
init()
.then((data) => {
  let employeesList = []
  employeesList.push(data)
  employeesList[0].type = "Manager"
  if (data.teamMemberAdd === "Intern") {
    promptIntern(employeesList)
  } else if (data.teamMemberAdd === "Engineer") {
    promptEngineer(employeesList)
  }
})


