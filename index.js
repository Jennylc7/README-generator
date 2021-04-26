//This is my new index.js

// TODO: Include packages needed for this application









//prompt- questions array for the user
const inquirer = require(inquirer);
const fs = require("fs");
const { DH_NOT_SUITABLE_GENERATOR } = require("node:constants");
console.log("```");

// TODO: Create an array of questions for user input
//prompt- questions array for the user
const questions = ([
    {
        //GitHub username
        message: "Please enter in your Github username.",
        name: "username",
        type: "input",
    },
    {
        //email address
        message: "Please enter in your email address.",
        name: "email",
        type: "input",
    },
    {
        //Project title
        message: "What would you like your project title to be?",
        name: "title",
        type: "input",
    },
    
    {
    //project description
        message: "Please provide a brief description of your project.",
        name: "description",
        type: "input",
    },
    {
        //installation
        message: "Please provide any installation instructions for your project.",
        name: "installation",
        type: "input",
    },
    {
        //usage
        message: "How does the user run this program.",
        name: "usage",
        type: "input",
    },
    {
        //license
        message: "What kind of license would you like your program to have?",
        name: "license",
        type: "checkbox",
        choices: ["Apache",
                  "MIT",
                  "ISC"] 
    },
  
    {
        //contributors
        message: "Who are the contributors to your project?",
        name: "contributors",
        type: "input",
    },
    {
        //tests
        message: "Run tests here.",
        name: "tests",
        type: "input",
    },
    {
        //project description
        message: "Please provide a brief description of your project.",
        name: "description",
        type: "input",
    },
]);

const READMEfile = `# $(title)
[Github license($badge)]`

`[username] (#username)`
`[email] (#email)`
`[title] (#title)`
`[description] (#description)` 
`[installation]  {#installation)` 
`[usage]  (#usage)`
`[license]  (#license)`
`[contributors] (#contributors)` 
`[tests]  (#tests)` 
`[description]  (#description)`



`##Username`
`${username}`

`##Email`
`${email}`

`##Title`
`${title}`

`##Description`
`${description}`

`##Installation`

`##Usage`

`##License`

`##Contributors`

`##Tests`

`##Description`


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        writeToFile("README.generator.md", response);
    })
}


// Function call to initialize app
init();

