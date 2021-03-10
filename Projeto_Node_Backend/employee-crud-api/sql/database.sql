CREATE DATABASE employee-api;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE employee (
    employeeId uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL,
    jobRole varchar(255) NOT NULL,
    salary NUMERIC(5,0),
    DateOfBirth DATE NOT NULL,
    EmployeeRegistration INTEGER NOT NULL
);