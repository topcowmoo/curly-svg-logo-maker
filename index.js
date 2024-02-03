// Import packages needed for application
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
  }

  setTextElement(text, color) {
    this.textElement = `<text x="150" y="150" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

// Array of questions
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => {
      return input.length <= 3 ? true : "Please enter up to three characters";
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color by keyword or hexadecimal:",
    validate: (input) => {
      const validHex = input.match(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/);
      const validColorName = /^([a-zA-Z])+$/.test(input.toLowerCase()); // Check if it's a valid color name
      return validHex || validColorName || "Invalid color format";
    },
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape color by keyword or hexadecimal:",
    validate: (input) => {
      const validHex = input.match(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/);
      const validColorName = /^([a-zA-Z])+$/.test(input.toLowerCase()); // Check if it's a valid color name
      return validHex || validColorName || "Invalid color format";
    },
  },
];


const writeToFile = (fileName, data) => {
  console.log(`Writing [${data}] to file [${fileName}]`);
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success, you have generated logo.svg");
  });
};

const init = async () => {
  console.log("Starting init");

  const answers = await inquirer.prompt(questions);

  // Process user input and generate SVG
  const userSvg = new Svg();
  userSvg.setTextElement(answers.text, answers.textColor);

  let userShape;
  switch (answers.shape.toLowerCase()) {
    case "triangle":
      userShape = new Triangle();
      break;
    case "circle":
      userShape = new Circle();
      break;
    case "square":
      userShape = new Square();
      break;
    default:
      console.log("Invalid shape!");
      return;
  }

  userShape.setColor(answers.shapeColor);
  userSvg.setShapeElement(userShape);
  const svgString = userSvg.render();

  console.log("Generated SVG:");
  console.log(svgString);

  // Write SVG string to file
  writeToFile("logo.svg", svgString);
};

// Call function
init();
