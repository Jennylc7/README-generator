// Imported required packages

//fs means file system, fs module is functionality to access and interact with the file system.  Does not need to be installed, already a part of Node.js
//path module, require the path to exist
const path = require('path');
//inquirer is an npm package, provides the user interface and inquiry session flow
const inquirer = require('inquirer');
//generateMarkdown function requires the Generate Markdown file in the utils folder.
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input that cptures user input into Node.js
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  //return file system, sync to path, process module is a built-in wrapper around cwd which returns the current working string. 
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  //inquirer captures user input
  
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();

//This is my new index.js

// TODO: Include packages needed for this application
//need const inquirer fs and path








//prompt- questions array for the user
//util is a variable

// TODO: Create an array of questions for user input
//prompt- questions array for the user






// const inquirer = require(`inquirer`);
// const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown.js');
// const path = require('path');
// const writeFileAsync = util.promisify(fs.writeFile);

// const badges = {
//     Mit_license: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
//     Apache_license: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
//     GitHub_License: "[!License](https://img.shields.io/azure-devops/coverage/ORGANIZATION/PROJECT/DEFINITION_ID.svg)](https://shields.io/category/coverage)",
//     No_license: " "
// };


// const questions = () => {
//     return inquirer.prompt([
//     {
//         //GitHub username
//         message: "Please enter in your Github username:",
//         name: "username",
//         type: "input",
//     },
//     {
//         //email address
//         message: "Please enter in your email address.",
//         name: "email",
//         type: "input",
//     },
//     {
//         //Project title
//         message: "What would you like your project title to be?",
//         name: "title",
//         type: "input",
//     },
    
//     {
//     //project description
//         message: "Please provide a brief description of your project.",
//         name: "description",
//         type: "input",
//     },
//     {
//         //installation
//         message: "Please provide any installation instructions for your project.",
//         name: "installation",
//         type: "input",
//     },
//     {
//         //usage
//         message: "How does the user run this program.",
//         name: "usage",
//         type: "input",
//     },
//     {
//         //license
//         message: "What kind of license would you like your program to have?",
//         name: "license",
//         type: "checkbox",
//         choices: ["MIT",
//                 "Apache",
//                 "GitHub"] 
//     },
  
//     {
//         //contributors
//         message: "Who are the contributors to your project?",
//         name: "contributors",
//         type: "input",
//     },
//     {
//         //tests
//         message: "Run tests here.",
//         name: "tests",
//         type: "input",
//     },
//     {
//         //project description
//         message: "Please provide a brief description of your project.",
//         name: "description",
//         type: "input",
    
//     }
// ]);

// function writeToFile(fileName, data) {

//     const writeToFile = (data) =>
//         `
// ${data.title} 


// ## Contents
// 1. [username] (#username)
// 2. [email] (#email)
// 3. [title] (#title)
// 4. [description] (#description) 
// 5. [installation]  {#installation) 
// 6. usage]  (#usage)
// 7. [license]  (#license)
// 8. [contributors] (#contributors) 
// 9. [tests]  (#tests) 
// 10. [description]  (#description)



// ##Username
// ${username}

// ##Email
// ${email}

// ##Title
// ${title}

// ##Description
// - $data.{description}

// ##Installation
// - ${data.installation}

// ##Usage
// - ${data.usage}

// ##License
// - ${data.license}

// ##Contributors
// - ${data.contributors}

// ##Tests
// - ${data.tests}

// ##Description
// - ${data.description}
// `

// // TODO: Create a function to write README file
// //function writeToFile(fileName, data) {}





// // TODO: Create a function to initialize app
// const init = () => {
//     questions()
//         .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
//         .then(() => console.log('Readme succesfully generated'))
//         .catch((err) => console.error(err));
// };

// init();
