// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const shape = require("./library/shape");
const svg = require("./library/svg");
const { writeFile } = require('fs/promises');

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter the 3 letter text",
  },
  {
    type: "input",
    name: "text-color",
    message: "Please enter the text-color",
  },

  {
    type: "List",
    name: "shape",
    message: "Please choose the shape",
    choices:["Circle", "Square","Triangle"],
  },
  
  {
    type: "input",
    name: "shape-color",
    message: "Please choose the color of the shape",
  },
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readme.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readMePageContent = generateMarkdown(answers);

    writeToFile("readme.md", readMePageContent);
  });
}

init();
