DROP DATABASE IF EXISTS cacti_dev;

CREATE DATABASE cacti_dev;

\c cacti_dev;

CREATE TABLE cacti(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    scientific_name TEXT,
    origin TEXT,
    life_expectancy INT,
    flowers BOOLEAN,
    max_height TEXT,
    fun_fact TEXT,
    care_instructions TEXT,
    edible BOOLEAN
);