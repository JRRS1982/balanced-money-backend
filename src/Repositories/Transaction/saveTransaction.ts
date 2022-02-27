import { Transaction } from 'Entities';

export interface ISaveInput {
  account: string;
  amount: number;
  date: Date;
}

export const saveTransaction = async (
  transaction: ISaveInput
): Promise<Transaction> => {
  const transactionEntity = Transaction.create(transaction);
  await Transaction.save(transactionEntity);
  return transactionEntity;
};
