DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	burger_name VARCHAR(255),
    devoured BOOLEAN,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);