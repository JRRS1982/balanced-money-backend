import path from 'path';
import { ConnectionOptions } from 'typeorm';

export const baseConfig: ConnectionOptions = {
  synchronize: true, // TODO turn false after initial setup i.e. when moving to migrations
  type: 'mysql',
  host: process.env.MYSQL_HOST, // localhost if outside docker, or the name of the docker db service
  port: Number(process.env.MYSQL_DOCKER_PORT), // 3306 - default mysql - container side
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [
    path.join(__dirname, '..', 'Entities', '**', '*.*'),
    path.join(__dirname, '..', 'Entities', '*.*')
  ],
  migrations: [path.join(__dirname, '..', 'migrations', '*.*')],
  cli: {
    entitiesDir: path.join(__dirname, '..', 'Entities'),
    migrationsDir: path.join(__dirname, 'migrations')
  }
};
