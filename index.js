const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    default: "AeroAtlas"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "andrewhardemon@gmail.com"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
  },
  {
    type: "input",
    name: "users",
    message: "Who were the main contributer(s)? (github name + seperate with commas)",
    default: "AeroAtlas"
  },
  {
    type: "input",
    name: "live",
    message: "What is the link to the live site (assumes it is a heroku link)",
  },
  {
    type: "input",
    name: "image",
    message: "What is the file name of the preview image (adds ./ to begining)",
  },
  {
    type: "input",
    name: "tech",
    message: "What did you use to create this project? (seperate with commas)"
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      {name:"MIT", value:"MIT"},
      {name:"APACHE 2.0", value:"APACHE_2.0"},
      {name:"GPL 3.0", value:"GPL_3.0"},
      {name:"BSD 3",value:"BSD_3"},
      {name:"None",value:"None"}]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run tests?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  }
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

init();
