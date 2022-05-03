import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { baseConfig } from './Configs';
import {
  HelloWorldResolver,
  TransactionResolver,
  UserResolver
} from './Resolvers';

async function main() {
  const { NODE_DOCKER_PORT } = process.env;
  await createConnection(baseConfig);

  const schema = await buildSchema({
    resolvers: [HelloWorldResolver, TransactionResolver, UserResolver]
  });

  const server = new ApolloServer({ schema });

  await server.listen(NODE_DOCKER_PORT, () => {
    console.log(`Server has started on port ${NODE_DOCKER_PORT}`);
  });
}
main();
