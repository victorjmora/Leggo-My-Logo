//import inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const fileName = './examples/logo.svg';
const shape = require('./shape');
const circle = require('./circle');
const triangle = require('./triangle');
const square = require("./square")

let data = "This is a file creating a logo.";
function createLogo(response) {
    console.log(response)
    let svg;
    if (response.shape === 'square'){
         svg = new square(response)
         svg = new square(response.shapeColor, response.text, response.textColor)
        }
        else if 
            (response.shape ==='circle') {
             svg = new circle(response)
             svg = new circle(response.shapeColor, response.text, response.textColor)
            }
            else if
            (response.shape === 'triangle') {
            svg = new triangle(response)
            svg = new triangle(response.shapeColor, response.text, response.textColor)
                };
                console.log("response.shape =", response.shape)
                console.log(svg)
    fs.writeFile("logo.svg", svg.render(), (err) => {
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

