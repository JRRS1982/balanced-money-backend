import {
  deleteTransactionAction,
  saveTransactionAction,
  getTransactionsAction,
  updateTransactionAction
} from 'Actions';
import { Transaction } from 'Entities';
import { Args, ArgsType, Field, Mutation, Query, Resolver } from 'type-graphql';
import { UpdateOptions } from 'Actions/UpdateTransaction/updateTransactionAction';

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
 * @UpdateTransactionArgs will need the id of the transaction, the new value and which field is being updated
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

/**
 * @Resolver is a decorator for type-graphql, is declares TransactionResolver as a graphql resolver
 *
 * @Query and @Mutation are other decorators - declaring what the following function does
 */
@Resolver()
export class TransactionResolver {
  @Query(() => [Transaction])
  transactions() {
    return getTransactionsAction();
  }

  @Mutation(() => Transaction)
  saveTransaction(
    @Args() saveArgs: SaveTransactionArgs
  ): Promise<Transaction | undefined> {
    return saveTransactionAction(saveArgs);
  }

  @Mutation(() => Transaction)
  updateTransaction(
    @Args() updateArgs: UpdateTransactionArgs
  ): Promise<Transaction | undefined> {
    return updateTransactionAction(updateArgs);
  }

  @Mutation(() => Boolean)
  deleteTransaction(
    @Args() deleteArgs: DeleteTransactionArgs
  ): Promise<boolean> {
    return deleteTransactionAction(deleteArgs);
  }
}
