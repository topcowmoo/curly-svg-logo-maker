const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");  // Importing the classes from the shapes module
const Svg = require("./lib/svg"); // Import Svg class from svg.js file

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
      const validHex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(input);
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
      const validHex = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(input);
      const validColorName = /^([a-zA-Z])+$/.test(input.toLowerCase()); // Check if it's a valid color name
      return validHex || validColorName || "Invalid color format";
    },
  },
];

const writeToFile = (fileName, data) => {
  const timestamp = new Date().toISOString().replace(/[-:.]/g, '');
  const uniqueFileName = `examples/${fileName.replace(/\.[^/.]+$/, "")}_${timestamp}.svg`;

  console.log(`Writing [${data}] to file [${uniqueFileName}]`);
  fs.writeFile(uniqueFileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Success, you have generated ${fileName}`);
  });
};


const init = async () => {
  console.log("Starting init");

  const answers = await inquirer.prompt(questions);

  const userSvg = new Svg();
  userSvg.setTextElement(answers.text, answers.textColor, answers.shape);

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

  writeToFile("logo.svg", svgString);
};

init();
 