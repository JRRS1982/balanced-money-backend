import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { baseConfig } from './Configs';
import { HelloWorldResolver } from './Resolvers/HelloWorldResolver';
import { TransactionResolver } from './Resolvers/Transaction/TransactionResolver';

async function main() {
  await createConnection(baseConfig);
  const port = process.env.NODE_DOCKER_PORT;

  const schema = await buildSchema({
    resolvers: [HelloWorldResolver, TransactionResolver]
  });

  const server = new ApolloServer({ schema });

  await server.listen(port, () => {
    console.log(`Server has started on port ${port}`);
  });
}
main();
