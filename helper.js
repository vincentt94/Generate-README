import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  switch (license) {
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'ISC':
      badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Mozilla':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    default:
      badge = 'No License';
      break;

  }
  return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  let link = '';
  switch (license) {
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'GPL 3.0':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'BSD 3':
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'ISC':
      link = 'https://opensource.org/licenses/ISC';
      break;
    case 'Mozilla':
      link = 'https://opensource.org/licenses/MPL-2.0';
      break;
    default:
      link = 'No License';
      break;
  
  }
  return link;



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
//remove the prompt information into the index.js and just add the question with the other questions
if (!license) {
  return '';
}
return `## License\nThis project is licensed under the ${license} license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description
  ${data.describe}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Guidelines](#guidelines)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Licenses
  ${renderLicenseBadge(data.license)}  
  ${renderLicenseLink(data.license)}

  ## Guidelines 
  ${data.guide}

  ## Tests
  ${data.instruct}

  ## Questions
  If you have any questions, you can reach me at ${data.email} or visit my GitHub profile at https://github.com/${data.github}/


`;
}

export default generateMarkdown;
