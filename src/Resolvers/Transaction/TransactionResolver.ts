import {
    deleteTransactionAction, getTransactionsAction, saveTransactionAction, updateTransactionAction,
} from 'Actions';
import { Transaction } from 'Entities';
import { Args, Mutation, Query, Resolver } from 'type-graphql';
import { DeleteTransactionArgs } from './DeleteTransactionArgs';
import { SaveTransactionArgs } from './SaveTransactionArgs';
import { UpdateTransactionArgs } from './UpdateTransactionArgs';

/**
 * @Resolver is a decorator for type-graphql, is declares TransactionResolver as a graphql resolver
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
