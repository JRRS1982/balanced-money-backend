import { saveTransactionAction } from "../Actions/SaveTransaction/saveTransactionAction";
import { Args, Field, ArgsType, Mutation, Query, Resolver } from "type-graphql";
import { getTransactionsAction } from "../Actions/GetTransactions/getTransactionsAction";
import { Transaction } from "../Entities/Transaction.entity";

@ArgsType()
class SaveTransactionArgs {
  @Field()
  id: number;

  @Field()
  account: string;

  @Field()
  amount: number;

  @Field()
  date: Date;
}

@Resolver() // a decorator - declare TransactionResolver as a Resolver for type-graphql
export class TransactionResolver {
  @Query(() => [Transaction]) // a decorator - for transactions() - saying it is a a query and will return an array of Transaction
  transactions() {
    return getTransactionsAction();
  }

  @Mutation(() => Transaction)
  saveTransaction(@Args() saveArgs: SaveTransactionArgs): Promise<Transaction> {
    return saveTransactionAction(saveArgs);
  }
  // TODO add delete mutation
}
