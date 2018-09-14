-- Sajeel Malik
-- SQL schema for Mealpal Ratings

-- for JawsDB
DROP DATABASE IF EXISTS jlf6ht0efhq8f1x;
CREATE DATABASE jlf6ht0efhq8f1x;

USE jlf6ht0efhq8f1x;

CREATE table meals
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    restaurant varchar(255) NOT NULL,
    flavor_rating DECIMAL(2,1) NOT NULL,
	worth_it BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
)

--For local database

-- DROP DATABASE IF EXISTS mealpalDB;
-- CREATE DATABASE mealpalDB;

-- USE mealpalDB;

-- CREATE table meals
-- (
--     id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(255) NOT NULL,
--     restaurant varchar(255) NOT NULL,
--     flavor_rating DECIMAL(2,1) NOT NULL,
-- 	worth_it BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- )