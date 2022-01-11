import { ITransaction } from "Entities/ITransaction";
import { Transaction } from "../../Entities/Transaction.entity";

export const saveTransaction = async (transaction: ITransaction): Promise<Transaction> => {
  // TODO this doesn't feel right - it may be creating duplicates
  const transactionEntity = Transaction.create(transaction);
  Transaction.save(transactionEntity);
  return transactionEntity;
};
