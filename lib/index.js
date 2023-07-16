//import inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const fileName = './examples/logo.svg';
const shape = require('./shape');

let data = "This is a file creating a logo.";

function createLogo(response) {
    const svg = new shape(response);
    fs.writeFile("logo.svg", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("logo.svg", "utf8"));
        }
      });
    //fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err);
    });
    }

    init();

