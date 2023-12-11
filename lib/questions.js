const questions = [
  {
    name: "shape",
    message: "Enter the shape of the logo:",
    type: "list",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "text",
    message: "Enter text for logo:",
    type: "Input",
    validate: (text) => {
      if (text.length > 3) {
        return console.log("Please enter the text not more than 3 characters!");
      }
      return true;
    },
  },
  {
    name: "textColor",
    message: "Enter text color for logo:",
    type: "input",
  },
  {
    name: "shapeColor",
    message: "Enter the color for the shape:",
    type: "input",
  },
];

module.exports = questions;
