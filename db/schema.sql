-- Sajeel Malik
-- SQL schema for Mealpal Ratings

DROP DATABASE IF EXISTS mealpalDB;
CREATE DATABASE mealpalDB;

USE mealpalDB;

CREATE table meals
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    restaurant varchar(255) NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
	worth_it BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
)