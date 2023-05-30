// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Circle,Triangle,Square} = require("./library/shape");
const SVG = require("./library/svg");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter the 1-3 letters for svg text",
    validate: (text) => {
      if(text.length >3){
        return false;
      }else
        {
          return true;
        }
    
    }
  },
  {
    type: "list",
    name: "textColor",
    message: "Please enter the text-color",
    choices: ["red", "green", "blue","white"],
  },

  {
    type: "list",
    name: "shape",
    message: "Please choose the shape",
    choices: ["Circle", "Square", "Triangle"],
  },

  {
    type: "list",
    name: "shapeColor",
    message: "Please choose the color of the shape",
    choices: ["red", "green", "blue"],
  },
];

inquirer.prompt(questions).then((response) => {
  var myObj;
  switch (response.shape) {
    case "Circle":
     myObj = new Circle();
     myObj.setColor(response.shapeColor);

      break;

    case "Square":
      myObj = new Square();
      myObj.setColor(response.shapeColor);

      break;

    case "Triangle":
      myObj = new Triangle();
      myObj.setColor(response.shapeColor);
      break;

  }
  const newSVG = new SVG();
  newSVG.setShape(myObj);
  newSVG.setText(response.text, response.textColor);
  fs.writeFileSync("logo.svg",newSVG.render(),function(err){
    if(err) throw err;
  })
  
});
