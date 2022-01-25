import { ITransaction } from '../../Entities/ITransaction';
import { Transaction } from '../../Entities/Transaction.entity';

export const saveTransaction = async (
  transaction: ITransaction
): Promise<Transaction> => {
  const transactionEntity = Transaction.create(transaction);
  await Transaction.save(transactionEntity);
  return transactionEntity;
};
