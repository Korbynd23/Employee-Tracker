DROP DATABASE IF EXISTS teamdb;
CREATE DATABASE teamdb;

USE teamdb;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,2) NULL,
  department_id INT NOT NULL
  -- FOREIGN KEY (department_id)
  -- REFERENCES department(id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    -- FOREIGN KEY (role_id)
    -- REFERENCES roles(id)
    -- null if employee has no manager
)