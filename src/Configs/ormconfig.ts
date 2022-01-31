import path from 'path';
import { ConnectionOptions } from 'typeorm';

// TODO: add dotenv and import config via env files
export const baseConfig: ConnectionOptions = {
  synchronize: true, // TODO turn false after initial setup i.e. when moving to migrations
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [
    path.join(__dirname, '..', 'Entities', '**', '*.*'),
    path.join(__dirname, '..', 'Entities', '*.*')
  ], // match entities to typeorm
  migrations: [path.join(__dirname, '..', 'migrations', '*.*')],
  cli: {
    entitiesDir: path.join(__dirname, '..', 'Entities'),
    migrationsDir: path.join(__dirname, 'migrations')
  }
};
