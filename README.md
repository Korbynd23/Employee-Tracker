# 12 SQL: Employee Tracker

## Table of Contents

- [Description](#description)
- [Acceptance Criteria](#acceptancecriteria)
- [Refrences](#references)
- [Videos](#videos)
- [Licenses](#license)
- [Author Info](#license)

![badge](https://img.shields.io/badge/license-MIT-brightorange)



## Description
This applications purpose is to take in users input and provide them questions that help track their employee, department and role information.

## AcceptanceCriteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```


## Install Instructions
none

## Credits
N/a

## Instructions/How to use

Link to Github Repo: https://github.com/Korbynd23/Employee-Tracker

Start the command link prompt by typing "node index.js" into the terminal. The prompt will then ask you to select from multiple questions: View all departments, view all roles, view all employees, add a department, add a role, add an employee, update an employee's role or update an employee's manager. When a command is select it will fire the corresponding function that will provide you with whats needed to complete the desired task. 'View all' selections will immediately display a table of your desired selection. After finishing your desired task it will return to the main prompt, you can then select another function or select quit to close the server.

## Videos:


Invoking the App - https://drive.google.com/file/d/1mAshOAdbDbztTJT7bZP8Wf1188rkAr7P/view




## License
Permission to use this application is granted under the MIT license. https://choosealicense.com/licenses/mit/

## Created By
[github link: korbynd23](https://github.com/korbynd23)

#### If you have any further questions on this application please feel free to contact me at kdicari24@gmail.com
