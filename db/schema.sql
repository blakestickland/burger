### Schema

-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Creates the "burgers_db" database -- 
CREATE DATABASE burgers_db;

-- Makes it so all of the folowing code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" wthin burgers_db
CREATE TABLE burgers
(
    -- Makes an Integer column called "id" which cannot be null and auto-increments --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Makes a string column called "burger_names" which cannot be null.
    burger_name VARCHAR(50) NOT NULL,
    -- Makes a boolean column called "devoured" which cannot be null -- 
    devoured BOOLEAN NOT NULL,
    -- Makes the column called "id" the primary key -- 
    PRIMARY KEY (id)
);