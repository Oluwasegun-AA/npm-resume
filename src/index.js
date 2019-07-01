
import inquirer from 'inquirer';
import chalk from 'chalk'
import resume from '/Users/oluwasegunadepoju/Desktop/vsc/personal/npm-resume/common/resume.json';

const greenResponse = chalk.bold.green;
const redResponse = chalk.bold.red;

const resumePrompts = {
  type: "list",
  name: "resumeOptions",
  message: "What would you like to know about me?",
  choices: [...Object.keys(resume), "Exit"]
};

const StartResume = () => {
  console.log("Good Day, I am Adépòjù Olúwásêgun, Welcome to my resume");
  resumeHandler();
}

const resumeHandler = () => {
  inquirer.prompt(resumePrompts).then(answer => {
    const option = answer.resumeOptions;
    if (option === "Exit") {
      return;
    }
    console.log(greenResponse("----------------------------------------------------------------"));
    resume[`${option}`].forEach(info => {
      console.log(greenResponse("|   " + info));
    });
    console.log(greenResponse("----------------------------------------------------------------"));
    inquirer.prompt({
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
}

StartResume();
