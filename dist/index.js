"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _chalk = _interopRequireDefault(require("chalk"));

var _resume = _interopRequireDefault(require("../common/resume.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greenResponse = _chalk.default.bold.green;
const redResponse = _chalk.default.bold.red;
const resumePrompts = {
  type: "list",
  name: "resumeOptions",
  message: "What would you like to know about me?",
  choices: [...Object.keys(_resume.default), "Exit"]
};

const StartResume = () => {
  console.log("Good Day, I am Adépòjù Olúwásêgun, Welcome to my resume");
  resumeHandler();
};

const resumeHandler = () => {
  _inquirer.default.prompt(resumePrompts).then(answer => {
    const option = answer.resumeOptions;

    if (option === "Exit") {
      return;
    }

    console.log(greenResponse("----------------------------------------------------------------"));

    _resume.default[`${option}`].forEach(info => {
      console.log(greenResponse("|   " + info));
    });

    console.log(greenResponse("----------------------------------------------------------------"));

    _inquirer.default.prompt({
      type: "list",
      name: "exitBack",
      message: "Go back or Exit?",
      choices: ["Back", "Exit"]
    }).then(choice => {
      if (choice.exitBack === "Back") {
        resumeHandler();
      } else {
        return;
      }
    });
  });
};

StartResume();