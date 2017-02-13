### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY (id)
);
SELECT * FROM burgers;

/*
mysql://ha7a6848xc8stjji:lthyv00jx7ad2p52@vhw3t8e71xdz9k14.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/af4elfpegq6zuxs3
*/