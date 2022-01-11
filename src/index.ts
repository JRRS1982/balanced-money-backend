import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { TransactionResolver } from "./Resolvers/TransactionResolver";
import { HelloWorldResolver } from "./Resolvers/HelloWorldResolver";
import { baseConfig } from "./Configs/ormconfig";

async function main() {
  await createConnection(baseConfig);
  // TODO: add port to env file
  const port = 4000;

  /**
   * use type-graphql to build a schema
   * - declare / add the resolvers to the schema
   */
  const schema = await buildSchema({
    resolvers: [HelloWorldResolver, TransactionResolver],
  });

  const server = new ApolloServer({ schema });

  await server.listen(port, () => {
    console.log(`Server has started on port ${port}`);
  });
}
main();
