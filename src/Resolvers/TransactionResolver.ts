import { Query, Resolver } from "type-graphql";
import { Transaction } from "../Entities/Transaction.entity";

@Resolver() // a decorator - declare TransactionResolver as a Resolver for type-graphql
export class TransactionResolver {
  @Query(() => [Transaction]) // a decorator - for transactions() - saying it is a a query and will return an array of Transaction
  transactions() {
    return Transaction.find();
  }
  // TODO add create, update, delete @Mutation
}
