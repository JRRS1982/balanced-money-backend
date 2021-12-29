# balanced-money-backend

A GraphQl API for data persistance of the balanced-money application

## Packages

* apollo-server: to build and run the graphQl server
* type-graphql: to generate the schema from typescript
* typeorm: to help interactions with the db
* reflect-metadata: to work with TS decorators, required if using typeorm and type-graphql
* typescript
* ts-node: to run the server is a development environment
* nodemon: to restart the server when changes are made to the code
* mysql: the database

## Scripts

* start: use nodemon to start the server and watch for changes in src file

## MySql

Commands that were run on terminal to create the database and user.

```bash
CREATE DATABASE balanced_money;
CREATE USER 'balancedMoney'@'localhost' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON balanced_money. * TO 'balancedMoney'@'localhost';
```
