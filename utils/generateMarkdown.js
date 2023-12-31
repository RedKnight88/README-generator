// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
      case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "BSD 2-Clause \"Simplified\" License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
      break;
    case "BSD 3-Clause \"New\" or \"Revised\" License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      break;
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      break;
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
      break;
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      break;
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
      break;
    case "GNU Lesser General Public License v3.0":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
      break;
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;
    default:
      return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0":
      return `[${license}](https://opensource.org/licenses/Apache-2.0)`
      break;
      case "GNU General Public License v3.0":
      return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case "MIT License":
      return `[${license}](https://opensource.org/licenses/MIT)`
      break;
    case "BSD 2-Clause \"Simplified\" License":
      return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`
      break;
    case "BSD 3-Clause \"New\" or \"Revised\" License":
      return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case "Boost Software License 1.0":
      return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`
      break;
    case "Creative Commons Zero v1.0 Universal":
      return `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`
      break;
    case "Eclipse Public License 1.0":
      return `[${license}](https://opensource.org/licenses/EPL-1.0)"`
      break;
    case "GNU Affero General Public License v3.0":
      return `[${license}](https://www.gnu.org/licenses/agpl-3.0)`
      break;
    case "GNU Lesser General Public License v3.0":
      return `[${license}](https://www.gnu.org/licenses/lgpl-3.0)`
      break;
    case "Mozilla Public License 2.0":
      return `[${license}](https://opensource.org/licenses/MPL-2.0)`
      break;
    case "The Unlicense":
      return `[${license}](http://unlicense.org/)`
      break;
    default:
      return "";
  }
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This software operates under ${license}. If you would like to learn more, please click on the link above.`;
}


// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributions
${data.contr}

## Tests
${data.test}

## License
${renderLicenseLink(data.license)}\n
${renderLicenseSection(data.license)}

## Questions
[Github](https://github.com/${data.username})\n
Email: ${data.email}`;
}

// Allows function to be called in other scripts
module.exports = generateMarkdown;
