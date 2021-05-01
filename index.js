const inquirer = require("inquirer");
const fs = require("fs");

function writeToFile(fileName, data) {
    fs.writeFile(
      `./dist/${fileName}.html`,
      generateHTML(data),
      (err) => {
        if (err) throw err;
        console.log(
          "HTML and CSS files have been generated! Check out the 'dist' folder to see the output!"
        );
      }
    );
  }