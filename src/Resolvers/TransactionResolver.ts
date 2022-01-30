import { getTransactionsAction } from '../Actions/GetTransactions';
import { saveTransactionAction } from '../Actions/SaveTransaction';
import { deleteTransactionAction } from '../Actions/DeleteTransaction';
import { Transaction } from '../Entities/Transaction.entity';
import { Args, ArgsType, Field, Mutation, Query, Resolver } from 'type-graphql';
import { updateTransactionAction } from '../Actions/UpdateTransaction';
import { UpdateOptions } from '../Actions//UpdateTransaction/updateTransactionAction';

@ArgsType()
class SaveTransactionArgs {
  @Field()
  account: string;

  @Field()
  amount: number;

  @Field()
  date: Date;
}

/**
 * Should be the transaction id, with the field that is going to be updated with the value which will be applied to that field.
 */
@ArgsType()
class UpdateTransactionArgs {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  field: UpdateOptions;

  @Field(() => String)
  value: string;
}

@ArgsType()
class DeleteTransactionArgs {
  @Field(() => Number)
  id: number;
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

  @Mutation(() => Transaction)
  updateTransaction(
    @Args() updateArgs: UpdateTransactionArgs
  ): Promise<Transaction> {
    return updateTransactionAction(updateArgs);
  }

  @Mutation(() => Boolean)
  deleteTransaction(
    @Args() deleteArgs: DeleteTransactionArgs
  ): Promise<boolean> {
    return deleteTransactionAction(deleteArgs);
  }
}
