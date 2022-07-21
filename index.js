const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

teamArray = [];

function runApp () {
// Add OOP functions here - create for the other roles, but not Employee.


function createTeam () {
    inquirer.prompt([{
      type: "list",
      message: "What type of employee would you like to add to your team?",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
    }]).then(function (userInput) {
      switch(userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }
  
function addManager() {
    inquirer.prompt ([
  
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerPhone",
        message: "What is the manager's office phone number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerPhone);
      teamArray.push(manager);
      createTeam();
    });
  
  }


function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your engineer's name?",

      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your engineer's id?",

      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is your engineer's email?",

      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is your engineer's GitHub username?",

      }
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([

      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

  }

  
  function htmlBuilder () {
    console.log("Team created!")
    

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
  }

  createTeam();


}

 runApp();