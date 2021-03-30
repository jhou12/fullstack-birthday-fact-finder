DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE birthdays (
  id int NOT NULL AUTO_INCREMENT,
  lookup varchar(15) NOT NULL,
  date varchar(50) NOT NULL,
  event text NOT NULL,
  PRIMARY KEY (id)
);
