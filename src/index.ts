import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { baseConfig } from "Configs";
import { HelloWorldResolver } from "Resolvers/HelloWorldResolver";
import { TransactionResolver } from "Resolvers/TransactionResolver";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

async function main() {
  await createConnection(baseConfig);
  // TODO: add port to env file
  const port = 4000;

  /**
   * use type-graphql to build a schema
   * - declare / add the resolvers to the schema
   */
  const schema = await buildSchema({
    resolvers: [HelloWorldResolver, TransactionResolver]
  });

  const server = new ApolloServer({ schema });

  await server.listen(port, () => {
    console.log(`Server has started on port ${port}`);
  });
}
main();
