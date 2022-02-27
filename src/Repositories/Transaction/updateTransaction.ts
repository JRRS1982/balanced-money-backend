import { Transaction, ITransaction } from 'Entities/Transaction.entity';

export const updateTransaction = async (
  transaction: ITransaction
): Promise<Transaction> => {
  const transactionEntity = Transaction.create(transaction);
  await Transaction.save(transactionEntity);
  return transactionEntity;
};
