const inquirer = require("inquirer");
const questions = require("./lib/questions.js");
const Triangle = require("./lib/triangle.js");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const fs = require("fs");
const fileName = "./examples/logo.svg";

function createLogo(answers) {
  if (answers.shape === "Circle") {
    let selectedShape = new Circle(
      answers.text,
      answers.textColor,
      answers.shapeColor
    );
    const svgLogo = selectedShape.render();
    return svgLogo;
  } else if (answers.shape === "Triangle") {
    let selectedShape = new Triangle(
      answers.text,
      answers.textColor,
      answers.shapeColor
    );
    const svgLogo = selectedShape.render();
    return svgLogo;
  } else if (answers.shape === "Square") {
    let selectedShape = new Square(
      answers.text,
      answers.textColor,
      answers.shapeColor
    );
    const svgLogo = selectedShape.render();
    return svgLogo;
  }
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const logoFile = createLogo(answers);

      fs.writeFile("./Examples/logo.svg", logoFile, () =>
        console.log("SVG logo hasbeen generated!")
      );
    })

    .catch((err) => {
      console.log(err);
    });
}

init();
