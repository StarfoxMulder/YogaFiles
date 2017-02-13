CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN,
	burger_date timestamp NOT NULL,
	PRIMARY KEY (id)
);


/*
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255),
	devoured BOOLEAN,
	burger_date TIMESTAMP NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('LizardMan Sandwich', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Classic Split', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Crispy Critters', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Ben Blankenwich', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Dulce Sweet Potato Fries', false);
*/