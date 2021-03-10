# CRUD PARA PERSISTIR DADOS DE UM FUNCIONÁRIO

---> Classes:

+ Employee                  (Funcionário)
    - employeeId            (id do funcionário)
    - name                  (nome)
    - jobRole               (cargo do funcionário)
    - salary                (salário)
    - DateOfBirth           (Data de Nascimento)
    - EmployeeRegistration  (Código do funcionário)

+ User (Autenticação)
    - email/username
    - password

----> Paths:
    + api       (Back-End)  + PostgreSQL
    + angular   (front)     + Bootstrap + SweetAlert
    + vue       (front)     + Bootstrap + SweetAlert
    + react     (front)     + Bootstrap + SweetAlert
    + svelte    (front)     + Bootstrap + SweetAlert

## comandos básicos do postgresql

Precisa ter o psql instalado. Conectando em um banco dentro de um docker.
Pode ser usado para conectar com bancos externos

```
psql -h 172.17.0.2 -p 5432 -U postgres
```
para listar os bancos de dados do servidor

```
\l
```

para criar um novo banco

```
create database employee_api;
```

para acessar diretamente o banco

```
\c employee_api
```

CREATE EXTENSION IF NOT EXISTIS "uuid-ossp";

CREATE TABLE employee (
    employeeId uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    name varchar(255) NOT NULL,
    jobRole varchar(255) NOT NULL,
    salary NUMERIC(5,0),
    DateOfBirth DATE NOT NULL,
    EmployeeRegistration INTEGER NOT NULL
);

## comandos para iniciar o app

npm init -y
npx eslint --init
npm i --save-dev husky nodemon
npm i eslint-friendly-formatter



## links dos videos para assistir

Live Coding CRUD Node.js + Angular + PostGreSQL - Dia 02
https://www.youtube.com/watch?v=igw22ZmaGrc


back end, front end, padrão camadas, mvc, rest
https://www.youtube.com/watch?v=b8uLFfzcVQ8


Angular + Spring Boot REST API Example Tutorial | Java Guides
https://www.youtube.com/watch?v=_rMAnZIcRiU


Spring Boot + Angular 8 CRUD Example | Spring Data | Java Techie
https://www.youtube.com/watch?v=QV7ke4a7Lvc