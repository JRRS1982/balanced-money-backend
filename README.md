# balanced-money-backend

A GraphQl API for data persistance of the balanced-money application

## Usage

### In Development

* Update baseConfig to the database of choice.
* Make sure you have a SQL server running - locally you may need to start it with `systemctl start mariadb` if using mariadb
* Install packages with `npm install`
* Start the server with `npm start`
* Visit [http://localhost:4000/](http://localhost:4000/) to find the server running

### In Production

TODO: add production endpoint

* Server should be available for GraphQl requests at XXXX

## Packages

* apollo-server: to build and run the graphQl server
* [typeorm](https://github.com/typeorm/typeorm): to help interactions with the db
* reflect-metadata: to work with TS decorators, required if using typeorm
* typescript: adding types to make JS safer
* ts-node: to compile and run the code without need of pre-compilation with tsc
* nodemon: to restart the server when changes are made to the code - a config was created at root level
* mysql: the database
* [babel](https://jestjs.io/docs/getting-started#using-babel): Jest requires babel for transpiling modern JS
* lodash: a library of helpful JS functions
* tsconfig-paths: allow declaration of short paths in tsconfig.json file
* @babel/plugin-proposal-decorators: Support for the experimental syntax 'decorators-legacy' i.e. the type-graphql decorators
* @babel/plugin-proposal-class-properties: Support for decorating class properties i.e. decorating classes with type-graphql decorators
* prettier: standardize formatting of the code
* eslint: standardize style of the code
* eslint-config-prettier: turn off eslint rules that may interfere with prettier rules
* eslint-plugin-prettier: turn prettier rules into eslint rules
* husky: hook into git to run commands such as format / lint prior to commit / push

## Scripts

* start: use nodemon to start the server and watch for changes in src file

## Queries / Mutations

TODO: add how to make a query / mutation to this application

Within the Apollo GraphQl explorer check the schema and run queries such as:

```graphql
query Query {
  transactions {
    id
    account
    amount
    date
  }
}
```

## MySql

Commands that were run on terminal to create the database and user.

```bash
CREATE DATABASE balanced_money;
CREATE USER 'balancedMoney'@'localhost' IDENTIFIED BY '<password>';
GRANT ALL PRIVILEGES ON balanced_money. * TO 'balancedMoney'@'localhost';
```

### Credits / Useful Resources

* TS and MySQL [here](https://www.infoq.com/articles/typescript-mysql/)
* Ben Awads video on TS, GraphQl, TypeOrm [here](https://www.youtube.com/watch?v=WhzIjYQmWvs)
* SO: TypeOrm ormconfig.ts reference [here](https://stackoverflow.com/questions/52187328/how-to-specify-ormconfig-ts-for-typeorm)
* LogRocket: Building a GraphQl API [here](https://blog.logrocket.com/build-graphql-typegraphql-typeorm/)
* Pedro's Video on TS, GraphQl, MySql, TypeOrm [here](https://www.youtube.com/watch?v=fov5e6XJgwc)
* Prettier, ESLint Install Guide: [here](https://khalilstemmler.com/blogs/tooling/prettier/)
* Nodemon and TS: [here](https://blog.logrocket.com/configuring-nodemon-with-typescript/)
* Install MariaDb on Ubuntu i.e. the Digital Ocean VPS instance [here](https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04)

### Notes / Learning

* tsconfig-paths: tsc will not compile the TS to JS cleanly - some of the paths are not being compiled - which means running node on the js causes paths to be undefined. Would like tidy path names so I would like to return to this later
* typegraph-orm: doesn't seem to work with Entities which are exported from an index file, again, would like to have clean imports so may return to this later - could be that i am exporting named exports instead of default, but I wish to get a MVP done then return to tidy up later.
* TODO: I currently have a digital ocean vps which I am hoping to add the database, server and front end on - I believe that this is the cheapest way to do it and as they are in the same vps will have low latency between requests/responses. Will need to add the database (mariadb / mysql) and go from there. ssh into the vps and run commands at root when the time comes - also can enter vps via DO console
