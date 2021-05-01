const inquirer = require("inquirer");
const fs = require("fs");

const initialQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "What is the team manager's name? :",
  },
  {
    type: "input",
    name: "managerID",
    message: "What is the team manager's ID? :",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the team manager's email? :",
  },
  {
    type: "input",
    name: "managerEmail",
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
    name: "internName",
    message: "What is your intern's name? :",
  },
  { type: "input", name: "internID", message: "What is your intern's ID? :" },
  {
    type: "input",
    name: "internEmail",
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
    name: "engineerName",
    message: "What is the engineer's name? :",
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the engineer's ID? :",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineer's email? :",
  },
  {
    type: "input",
    name: "engineerGithub",
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

function promptEngineer() {
  return inquirer
    .prompt([...engineerQuestions])
    .then((engineerData) => {
      console.log(engineerData);
    })
    .then(promptAddNewTeamMember);
}

function promptIntern() {
  return inquirer
    .prompt([...internQuestions])
    .then((internData) => {
      console.log(internData);
    })
    .then(promptAddNewTeamMember);
}

function promptAddNewTeamMember() {
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
         promptIntern()
       } else if (answerTypeTeamMember.teamMemberType === "Engineer"){
         promptEngineer()
       }
     })
    }
  });
}

init().then((data) => {
  console.log(data);
  if (data.teamMemberAdd === "Intern") {
    promptIntern();
  } else if (data.teamMemberAdd === "Engineer") {
    promptEngineer();
  }
});
