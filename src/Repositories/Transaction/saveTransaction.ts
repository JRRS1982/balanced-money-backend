import { SaveTransactionArgs } from '../../Resolvers/Transaction/SaveTransactionArgs';
import { Transaction } from '../../Entities';

export const saveTransaction = async (
  transaction: SaveTransactionArgs
): Promise<Transaction> => {
  const transactionEntity = Transaction.create(transaction);
  await Transaction.save(transactionEntity);
  return transactionEntity;
};
