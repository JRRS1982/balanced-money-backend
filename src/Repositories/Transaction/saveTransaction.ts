import { ITransaction, Transaction } from "Entities";

export const saveTransaction = async (
  transaction: ITransaction
): Promise<Transaction> => {
  const transactionEntity = Transaction.create(transaction);
  await Transaction.save(transactionEntity);
  return transactionEntity;
};
