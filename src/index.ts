import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { TransactionResolver } from "./resolvers/TransactionResolver"; // add this
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import { baseConfig } from "./configs/ormconfig";

async function main() {
  await createConnection(baseConfig);

  const schema = await buildSchema({
    resolvers: [HelloWorldResolver, TransactionResolver], // add more resolvers here
  });

  const server = new ApolloServer({ schema });

  await server.listen(4000, () => {
    console.log("Server has started!");
  });
}
main();
