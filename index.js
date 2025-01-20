// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from './helper.js';
import fs from 'fs';
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // const userInfo = ({title, describe, install, usage, guide, instruct, github, email, license}) => generateMarkdown ;  
    
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created README.md')
)
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project?',
        name: 'describe',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'guide',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'instruct',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        message: 'Please select a license for your project',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'ISC', 'Mozilla'],
        type: 'list',
        name: 'license',
    },
])
.then((answers) => {

    
    // write answers to file
    writeToFile('README.md', answers);
})

 }

// Function call to initialize app
init();
