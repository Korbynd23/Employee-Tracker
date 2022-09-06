const express = require('express');
const mysql = require('mysql2');
const inquirer = require("inquirer")

const port = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'korbyn',
    database: 'teamdb'
  },
  console.log(`Connected to the teamdb database.`)
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
        "Add Department",
        "Quit"
      ],
      name: "employeeAdd",

    }
  ]).then((newCase) => {
    switch (newCase.employeeAdd) {
      case "View All Employees":
        viewEmployees()
        break;
      case "Add Employee":
        addEmployee()
        break;
      case "Update Employee Role":
        updateEmployeeRole()
        break;
      case "View All Roles":
        viewAllRoles()
        break;
      case "Add Role":
        addRole()
        break;
      case "View All Departments":
        viewAllDepts()
        break;
      case "Add Department":
        addDept()
        break;
      case "Quit":
        quit()
        break;
    }
  })
}

const viewEmployees = () => {
  const sql = `Select * from employees`;
  db.query(sql, function(err, res) {
    if (err) throw err;
    console.table(res);
    topPrompt();
  });
}

const addRole = () => {
  // name, salary, and department for the role and that role is added to the database
  return inquirer.prompt([
    {
      type: "input",
      message: "Name of New Role",
      name: "newRoleName"
    },
    {
      type: "input",
      message: "Input Salary of New Role",
      name: "newRoleSalary"
    },
    {
      type: "input",
      message: "What is the department ID number?",
      name: "departmentId",
    }
  ]).then(function (answer) {

    db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.newRoleName, answer.newRoleSalary, answer.departmentId], function (err, res) {
      if (err)
      console.table(res);
      topPrompt()
    })
  })
}



function quit() {
  db.end();
  process.exit();
}

// --------------------------------------------------------------------

topPrompt()

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

//  listen to server  
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
