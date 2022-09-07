INSERT INTO department (name)
VALUES ("Back of House"), 
        ("Front of House"), 
        ("Training");

INSERT INTO roles (title, salary, department_id)
VALUE ("Chef", 80000.00, 1), 
        ("Manager", 75000.00, 2), 
        ("Cook", 40000.00, 1), 
        ("Server", 35000.00, 2), 
        ("Corporate Trainer", 65000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE ("Karl", "Arnold", 1, null), 
        ("Nelson", "Castro", 2, null), 
        ("Pablo", "Garcia", 3, 1), 
        ("Eric", "Cena", 4, 2), 
        ("Melly", "Sands", 5, 2);