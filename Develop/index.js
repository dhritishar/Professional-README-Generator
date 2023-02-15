// TODO: Include packages needed for this application
const fs = require("fs") //node module that deals with the files
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "- What is the title of your project? ",
    },
    {
        type: "input",
        name: "description",
        message: "- Please describe the purpose and the functionality of this project: ",
    },
    {
        type: "checkbox",
        name: "license",
        message: "- Please select the license applicable to your project: ",
        message: " ",
        choices: ["*  MIT", "*  Mozilla Public License 2.0", "*  BSD 2", "*  Boost Software License 1.0", "*  None"],
    },
    {
        type: "input",
        name: "require",
        message: "- Please list all of the project dependencies used in the project: ",   
    },
    {
        type: "input",
        name: "usage",
        message: "- Please  list the languages and/or technologis used in this project: ",
    },
    {
        type: "type",
        name: "creator",
        message: "- Please write your GitHub username: ",
    },
    {
        type: "input",
        name: "name",
        message: "- Please state your full name: ",
    },
    {
        type: "input",
        name: "email",
        message: "- Please input your email address: ",
    },
    {
        type: "input",
        name: "contributors",
        message: "- Please list the contributors in this project and their GitHub usernames: ",
        default: " ",
    },
    {
        type: "input",
        name: "test",
        message: "- Please state the walkthrough of any tests needed in this project: ",
    },
];

//once the questions are done, loads README file and writes the file
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        console.log(JSON.stringify(data, null, ""));
        writeToFile("./Develop/Dist/README.md", data);
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data)), function(err){
        if (err) {return console.log(err);}
    };
}


// Function call to initialize app
init();
