DROP DATABASE IF EXISTS teamDB;
CREATE DATABASE teamDB;

USE teamDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10.3) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT
    manager_id INT
    -- null if employee has no manager
)