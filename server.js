const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer")

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'korbyn',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );
// --------------------------------------------------------------------

const topPrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department"
      ],
      name: "employeeAdd",

  }
]).then((newCase) => {
  switch (newCase.employeeAdd) {
      case "View All Employees":
          addEngineer()
          break;
      case "Add Employee":
          addIntern()
          break;
      case "Update Employee Role":
          pushNewEmployee()
          break;
      case "View All Roles":
          addIntern()
          break;
      case "Add Role":
          addRole()
          break;
          case "View All Departments":
            addIntern()
            break;
            case "Add Department":
              pushNewEmployee()
            }
          })
        }
        
        const addRole = () => {
          // name, salary, and department for the role and that role is added to the database
          return inquirer.prompt([
            {
              type: "input",
              message: "Name of New Role",
              name: "newName"
            },
            {
              type: "input",
              message: "Input Salary of New Role",
              name: "newSalary"
            },
            {
              type: "list",
            message: "Which Department does the role belong to?",
            choices: [
                "Engineer",
                "Intern",
                "No, I'm finished"
            ],
            name: "newRole",
            }
  ]).then((newRoleData) => {
    const { newName, newSalary, newRole } = newRoleData
    const roleInput = 
  })
}



// --------------------------------------------------------------------

    // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//  listen to server  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });