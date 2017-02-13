CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes (
  id int AUTO_INCREMENT,
  wish varchar(140) NOT NULL,
  PRIMARY KEY(id)
);