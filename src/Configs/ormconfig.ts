import { ConnectionOptions } from "typeorm";

// TODO: add dotenv and import config via env files
export const baseConfig: ConnectionOptions = {
  synchronize: true, // TODO turn false after initial setup i.e. when moving to migrations
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'balancedMoney',
  password: '12345',
  database: 'balanced_money',
  entities: [
    __dirname + '/../**/**.entity.ts' // map entities to typeorm
  ],
  migrations: ['src/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations'
  }
};
